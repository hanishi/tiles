TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Controller = {

        showView: function(color, id) {
            var fetchingTileData = TilesManager.request("tiles:entities");

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

                TilesApp.TilesView.on("show", function(){

                    if (id) {


                        var tile = tiles.get(id);
                        var transition = tile.get("transitions")[color];
                        var action = transition["action"].split(/[\.]+/);
                        var method = action.pop();
                        var actionView = TilesManager.module(action.join("."))[method](tile);

                        TilesManager.mainRegion.show(actionView);

                    }

                });
            });
            TilesManager.mainRegion.show(TilesApp.TilesView);
        },
        showPlaceholder: function() {
            return  new TilesApp.Undefined();
        }
    }
});