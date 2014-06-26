TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {
    CreditCard.Controller = {
        newCreditCard: function(color, id) {
            var fetchingTileData = TilesManager.request("tiles:entities");
            $.when(fetchingTileData).done(function(tiles){

                TilesManager.currentColor = color;
                var tilesView = new End.Tiles({
                    collection: tiles
                });
                tilesView.on("itemview:tiles:action", function(childView, model){
                    TilesManager.trigger("tiles:action", color, model);
                });
                TilesManager.mainRegion.show(tilesView);
            });
        }
    }
});