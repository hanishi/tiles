TilesManager.module("TilesApp.End", function(End, TilesManager, Backbone, Marionette, $, _) {
    End.Controller = {
//        showTiles: function(color) {
//            var fetchingTileData = TilesManager.request("tiles:entities");
//            $.when(fetchingTileData).done(function(tiles){
//
//                TilesManager.currentColor = color;
//                var tilesView = new End.Tiles({
//                    collection: tiles
//                });
//                tilesView.on("itemview:tiles:action", function(childView, model){
//                    TilesManager.trigger("tiles:action", color, model);
//                });
//                TilesManager.mainRegion.show(tilesView);
//            });
//        },

        showTiles: function(color) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            var layout = new TilesManager.TilesApp.Layout();
            $.when(fetchingTileData).done(function(tiles){

                TilesManager.currentColor = color;
                var tilesView = new End.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:action", function(childView, model){
                    TilesManager.trigger("tiles:action", color, model);
                });
                layout.on("show", function(){
                    layout.tilesRegion.show(tilesView);
                    //here most recently used view should be used.
                    layout.actionRegion.show(new End.Login());
                });
            });
            TilesManager.mainRegion.show(layout);
        }
    }
});