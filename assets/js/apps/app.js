var TilesManager = new Marionette.Application();

TilesManager.addRegions({
    mainRegion: "#main-region"
});

TilesManager.navigate = function(route, options){
    options || (options = {});
    Backbone.history.navigate(route, options);
};

TilesManager.getCurrentRoute = function(){
    return Backbone.history.fragment;
};

TilesManager.on("initialize:after", function(){
    if(Backbone.history) {
        Backbone.history.start();
        if(this.getCurrentRoute() == "") {
            TilesManager.trigger("tiles:show");
        }
    }
})