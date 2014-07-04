TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    TilesApp.Controller = {

        showView: function(color, id) {
            var fetchingTileData = TilesManager.request("tiles:entities");

            $.when(fetchingTileData).done(function(tiles){

                TilesManager.TilesApp.currentColor = color;

                TilesApp.TilesView = TilesManager.TilesApp.currentColor ?
                    new TilesApp.MenuItems({ collection: tiles}) :
                    new TilesApp.Menus({ collection: tiles});

                TilesApp.TilesView.on("itemview:tiles:action", function(childView, model){

                    TilesApp.TilesView.$el.addClass('animated bounceOut');
                    TilesApp.TilesView.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $(this).removeClass('animated bounceOut');

                        if (TilesManager.TilesApp.currentColor) {
                            TilesApp.TilesView.$el.hide();
                            TilesManager.trigger("tiles:action", TilesManager.TilesApp.currentColor, model.id);
                        } else {
                            TilesManager.trigger("tiles:action", model.get("color"));
                        }
                    });
                });
                if (id) {
                    var tile = tiles.get(id);
                    var transition = tile.get("transitions")[color];
                    var action = transition["action"].split(/[\.]+/);
                    var method = action.pop();console.log(method);
                    var actionView = TilesManager.module(action.join("."))[method](tile);
                    //TilesManager.mainRegion.close();
                    var frame = new TilesManager.TilesApp.Action();
                    frame.on("show", function(){
                        frame.formRegion.show(actionView);
                    });

                    TilesManager.dialogRegion.show(frame);
                    console.log("A");
                } else {
                    TilesManager.dialogRegion.close();
                    TilesManager.mainRegion.show(TilesApp.TilesView);
                }
            });


        },
        showPlaceholder: function() {
            return  new TilesApp.Undefined();
        }
    }
});