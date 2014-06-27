TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "show": "showTiles",
           "show/:color": "showTiles",
           "show/:color/:id": "action"
       }
    });

    TilesApp.Login = Marionette.Layout.extend({
        template: "#login",
        regions:{
            tilesRegion: "#tiles-region",
            actionRegion: "#action-region"
        }
    });

    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });

    TilesApp.Controller = {
        showView: function(color, id) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            $.when(fetchingTileData).done(function(tiles){

                TilesManager.currentColor = color;
                var tilesView = new TilesApp.End.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:action", function(childView, model){
                    TilesManager.trigger("tiles:action", color, model.id);
                });
                var model = tiles.get(id);
                console.log(model);
                var transition = model.get("transitions")[color];

                var layout = new (Marionette.Layout.extend({
                    template: "#"+transition["template"],
                    regions:{
                        tilesRegion: "#tiles-region",
                        actionRegion: "#action-region"
                    }
                }));

                var actionView =  new (TilesManager.module(transition["module"])[transition["view"]]);

                layout.on("show", function(){

                    layout.tilesRegion.show(tilesView);
                    layout.actionRegion.show(actionView);


                });
                TilesManager.mainRegion.show(layout);
            });

    }}

    var API = {
        showTiles: function(color){
            if(color) {
                TilesManager.navigate("show/" + color);
                TilesApp.End.Controller.showTiles(color);
            } else {
                TilesManager.navigate("show");
                TilesApp.Start.Controller.showTiles();
            }
        },
        action: function(color, id) {

            if(id===0) {
                //reset if id is 0
                this.showTiles();
            }else if(id<9){
                TilesManager.navigate("show/" + color + "/" + id);
                TilesApp.Controller.showView(color, id);
            }
        }
    };

    TilesManager.on("tiles:show", function(model){
        if(model) {
            var color = model.get("color")
            API.showTiles(color);
        } else {
            API.showTiles();
        }
    });

    TilesManager.on("tiles:action", function(color, model) {
        API.action(color, model);
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    });

});