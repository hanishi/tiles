TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "show": "showTiles",
           "show/:color": "showTiles",
           "show/:color/:id": "action"
       }
    });

    var API = {
        showTiles: function(color){
            if(color) {
                TilesApp.End.Controller.showTiles(color);
            } else {
                TilesApp.Start.Controller.showTiles();
            }
        },
        action: function(color, id) {
            console.log(color + ":" + id);
        }
    };

    TilesManager.on("tiles:show", function(model){
        if(model) {
            console.log(model);
            TilesManager.navigate("show/" + model.get("color"));
            API.showTiles(model);
        } else {
            console.log(model);
            TilesManager.navigate("show");
            API.showTiles();
        }
    });

    TilesManager.on("tiles:return", function(){
        TilesManager.navigate("show");
        API.showTiles();
    });

    TilesManager.on("tiles:red", function(model) {
        TilesManager.navigate("show/red/" + model.id);
        API.action("red", model.id);
    });

    TilesManager.on("tiles:violet", function(model) {
        TilesManager.navigate("show/violet/" + model.id);
    });

    TilesManager.on("tiles:pink", function(model) {
        TilesManager.navigate("show/pink/" + model.id);
    });

    TilesManager.on("tiles:orange", function(model) {
        TilesManager.navigate("show/orange/" + model.id);
    });

    TilesManager.on("tiles:yellow", function(model) {
        TilesManager.navigate("show/yellow/" + model.id);
    });

    TilesManager.on("tiles:green", function(model) {
        TilesManager.navigate("show/green/" + model.id);
    });

    TilesManager.on("tiles:cyan", function(model) {
        TilesManager.navigate("show/cyan/" + model.id);
    });

    TilesManager.on("tiles:blue", function(model) {
        TilesManager.navigate("show/blue/" + model.id);
    });

    TilesManager.on("tiles:darkblue", function(model) {
        TilesManager.navigate("show/darkblue/" + model.id);
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    });

});