TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Router = Marionette.AppRouter.extend({
       appRoutes: {
           "t": "showView",
           "t/:category": "showView",
           "t/:category/:id": "showView"
       }
    });

    var API = {

        showView: function(category, id) {

            if (!_.isUndefined(category) && !_.isNull(category)) {

                if (!_.isUndefined(id) && !_.isNull(id)) {
                    if (id < 9) {
                        console.log(category + ":" + id);
                        TilesManager.navigate("t/" + category + "/" + id);
                        TilesApp.Controller.showView(category, id);
                    } else {

                        this.showView();
                    }

                } else {

                    TilesManager.navigate("t/" + category);
                    TilesApp.Controller.showView(category);
                }

            } else {
                if(!_.isUndefined(id)) {
                    this.showView(id, id);
                } else {
                    TilesManager.navigate("t");
                    TilesApp.Controller.showView();
                }
            }
        }
    };

    TilesManager.on("tiles:show", function(){
        API.showView();
    });

    TilesManager.on("tiles:action", function(category, id) {
        console.log(category + ":" + id)
        API.showView(category, id);
    });

    TilesManager.addInitializer(function(){
        new TilesApp.Router({
            controller: API
        });
    });

});