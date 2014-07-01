TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Controller = {

        showView: function(color, id) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            var layout = new TilesManager.TilesApp.Login();
            $.when(fetchingTileData).done(function(tiles){

                TilesManager.TilesApp.currentColor = color;

                TilesApp.TilesView = TilesManager.TilesApp.currentColor ?
                    new TilesApp.MenuItems({ collection: tiles}) :
                    new TilesApp.Menus({ collection: tiles});


                TilesApp.TilesView.on("itemview:tiles:action", function(childView, model){
                    //if(model.get("transitions")[TilesManager.TilesApp.currentColor]["module"])
                    if (TilesManager.TilesApp.currentColor) {
                        TilesManager.trigger("tiles:action", TilesManager.TilesApp.currentColor, model.id);
                    } else {

                        TilesManager.trigger("tiles:action", model.get("color"));
                    }
                });
                var actionView;
                if (id) {
                    var tile = tiles.get(id);
                    console.log(tile)
                    var transition = tile.get("transitions")[color];
                    layout = new (Marionette.Layout.extend({
                        template: "#" + transition["template"],
                        regions: {
                            tilesRegion: "#tiles-region",
                            actionRegion: "#action-region"
                        }
                    }));
                    var action = transition["action"].split(/[\.]+/);
                    var method = action.pop();
                    actionView = TilesManager.module(action.join("."))[method](tile);
                } else {
                    actionView = new TilesApp.Undefined();
                }

                layout.on("show", function(){
                    layout.tilesRegion.show(TilesApp.TilesView);
                    layout.actionRegion.show(actionView);
                    if (!id) {

                        console.log(TilesApp.TilesView.children);
                        TilesApp.TilesView.children.forEach(function(view){

                            view.$el.addClass("animated fadeIn")
                        });

                    }
                });
            });
            TilesManager.mainRegion.show(layout);
        },
        showPlaceholder: function() {

            return  new TilesApp.Undefined();
        }
    }
});