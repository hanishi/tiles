TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "start": "showTiles",
           "switch/:id": "switchTiles"
       }
    });

    var API = {
        showTiles: function(){
            TilesApp.Start.Controller.showTiles();
        },
        switchTiles: function(id) {
            console.log(id);
        }
    }

    TilesManager.on("tiles:start", function(){
        TilesManager.navigate("start");
        API.showTiles();
    });
    TilesManager.on("tiles:switch", function(id){
        TilesManager.navigate("switch/" + id);
        API.switchTiles(id);
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    })

});