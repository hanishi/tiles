TilesManager.module("TilesApp.Start", function(Start, TilesManager, Backbone, Marionette, $, _) {
    Start.Controller = {
//        showTiles: function() {
//            var fetchingTileData = TilesManager.request("tiles:entities");
//            $.when(fetchingTileData).done(function(tiles){
//                var tilesView = new Start.Tiles({
//                    collection: tiles
//                });
//                tilesView.on("itemview:tiles:show", function(childView, model){
//                    TilesManager.trigger("tiles:show", model);
//                });
//                TilesManager.mainRegion.show(tilesView);
//            });
//        },
        showTiles: function() {
            var fetchingTileData = TilesManager.request("tiles:entities");
            var layout = new TilesManager.TilesApp.Login();
            $.when(fetchingTileData).done(function(tiles){

                var tilesView = new Start.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:show", function(childView, model){
                    TilesManager.trigger("tiles:show", model);
                });
                layout.on("show", function(){
                    layout.tilesRegion.show(tilesView);
                    layout.actionRegion.show(new Start.Login());
                });
            });
            TilesManager.mainRegion.show(layout);
        }
    }
});