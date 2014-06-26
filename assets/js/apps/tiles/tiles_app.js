TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "show": "showTiles",
           "show/:color": "showTiles"
       }
    });

    var API = {
        showTiles: function(model){
            if(model) {
                TilesApp.End.Controller.showTiles(model);
            } else {
                TilesApp.Start.Controller.showTiles();
            }
        }
    }

    TilesManager.on("tiles:show", function(model){
        if(model) {
            TilesManager.navigate("show/" + model.color);
            API.showTiles(model);
        } else {
            TilesManager.navigate("show");
            API.showTiles();
        }
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    })

});