TilesManager.module("TilesApp.End", function(End, TilesManager, Backbone, Marionette, $, _) {
    End.Controller = {
        showTiles: function(model) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            $.when(fetchingTileData).done(function(tiles){
                console.log(model.id);
                console.log(model.get("color"));
                TilesManager.currentId = model.id;
                TilesManager.currentColor = model.get("color");
                var tilesView = new End.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:return", function(childView, model){
                    console.log("AAAAAAAAAAAAAAAAAAAAAA");
                });
                TilesManager.mainRegion.show(tilesView);
            });
        }
    }
});