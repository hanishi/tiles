TilesManager.module("TilesApp.End", function(End, TilesManager, Backbone, Marionette, $, _) {
    End.Controller = {
        showTiles: function(color) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            $.when(fetchingTileData).done(function(tiles){
                TilesManager.currentColor = color;
                var tilesView = new End.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:red", function(childView, model){
                    TilesManager.trigger("tiles:red", model);
                });
                tilesView.on("itemview:tiles:violet", function(childView, model){
                    TilesManager.trigger("tiles:violet", model);
                });
                tilesView.on("itemview:tiles:pink", function(childView, model){
                    TilesManager.trigger("tiles:pink", model);
                });
                tilesView.on("itemview:tiles:orange", function(childView, model){
                    TilesManager.trigger("tiles:orange", model);
                });
                tilesView.on("itemview:tiles:yellow", function(childView, model){
                    TilesManager.trigger("tiles:yellow", model);
                });
                tilesView.on("itemview:tiles:green", function(childView, model){
                    TilesManager.trigger("tiles:green", model);
                });
                tilesView.on("itemview:tiles:cyan", function(childView, model){
                    TilesManager.trigger("tiles:cyan", model);
                });
                tilesView.on("itemview:tiles:blue", function(childView, model){
                    TilesManager.trigger("tiles:blue", model);
                });
                tilesView.on("itemview:tiles:darkblue", function(childView, model){
                    TilesManager.trigger("tiles:darkblue", model);
                });

                TilesManager.mainRegion.show(tilesView);
            });
        }
    }
});