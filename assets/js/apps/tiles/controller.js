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
                        // 1 or last most recent position in this color
                        TilesManager.trigger("tiles:action", model.get("color"), 1);
                    }

                });
                var actionView;
                if (id) {
                    var model = tiles.get(id);
                    var transition = model.get("transitions")[color];
                    layout = new (Marionette.Layout.extend({
                        template: "#" + transition["template"],
                        regions: {
                            tilesRegion: "#tiles-region",
                            actionRegion: "#action-region"
                        }
                    }));
                    var action = transition["action"].split(/[\.]+/);
                    var method = action.pop();
                    console.log(action.join(".")+ "." + method);
                    actionView = TilesManager.module(action.join("."))[method]();
                } else {

                    actionView = new TilesApp.Undefined();
                }

                layout.on("show", function(){
                    layout.tilesRegion.show(TilesApp.TilesView);
                    layout.actionRegion.show(actionView);
                });
            });
            TilesManager.mainRegion.show(layout);
        }
    }
});