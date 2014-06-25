TilesManager.module("TilesApp.Start", function(Start, TilesManager, Backbone, Marionette, $, _) {
    Start.Controller = {
        showTiles: function() {
            var fetchingTileData = TilesManager.request("tiles:entities");

            $.when(fetchingTileData).done(function(tiles){

                var tilesView = new Start.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:switch", function(childView, model){

                    TilesManager.trigger("tiles:switch", model.get("id"));
                });
                TilesManager.mainRegion.show(tilesView);
            });
        }
    }
});