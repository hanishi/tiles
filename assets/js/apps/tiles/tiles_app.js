TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "show": "showView",
           "show/:color/:id": "action"
       }
    });

    var API = {
        showView: function(){
            TilesManager.navigate("show");
            TilesApp.Controller.showView();
        },
        action: function(color, id) {
            if(id===0) {
                //reset if id is 0
                this.showView();
            }else if(id<9){
                TilesManager.navigate("show/" + color + "/" + id);
                TilesApp.Controller.showView(color, id);
            }
        }
    };

    TilesManager.on("tiles:show", function(){
        API.showView();
    });

    TilesManager.on("tiles:action", function(color, id) {
        API.action(color, id);
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    });

});