TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Controller = {

        showView: function(category, id) {

            var fetchingTileData = TilesManager.request("tiles:entities");

            $.when(fetchingTileData).done(function(tiles){

                TilesManager.TilesApp.currentCategory = category;

                var region, tile, action, method;
                var frame = new TilesManager.TilesApp.Frame();
                if(!_.isUndefined(TilesManager.TilesApp.currentCategory) && !_.isUndefined(id)) {
                    tile = tiles.get(id);
                    var transition = tile.get("transitions")[TilesManager.TilesApp.currentCategory];
                    //if(!_.has(transition, "action")) throw new Error("no action specified.")
                    action = transition["action"].split(/[\.]+/);
                    method = action.pop();

                    TilesApp.TilesView = TilesManager.module(action.join("."))[method](tile);
                    frame.on("show", function () {
                        frame.contentRegion.show(TilesApp.TilesView);
                        //frame.footerRegion.show();
                    });
                    TilesManager.mainRegion.close();
                    region = TilesManager.dialogRegion;
                } else {

                        TilesApp.TilesView = new TilesApp.Tiles({ collection: tiles});

                        frame.on("show", function () {
                            frame.contentRegion.show(TilesApp.TilesView);
                        });
                        TilesManager.dialogRegion.close();
                        region = TilesManager.mainRegion;
                }

                TilesApp.TilesView.on("itemview:tiles:action", function(childView, model){

                    frame.$el.addClass('animated bounceOut');
                    frame.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated bounceOut');

                        if(!_.isUndefined(model.get("action"))){

                            TilesManager.trigger("tiles:action", undefined, model.id);

                        } else if (!_.isUndefined(TilesManager.TilesApp.currentCategory)) {

                            TilesManager.trigger("tiles:action", TilesManager.TilesApp.currentCategory, model.id);

                        } else {

                            TilesManager.trigger("tiles:action", model.id);
                        }
                    });
                });
                region.show(frame);
            });
        },

        showPlaceholder: function() {
            return  new TilesApp.Undefined();
        }
    }
});