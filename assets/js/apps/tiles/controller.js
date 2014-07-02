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

                    //if(model.get("transitions")[TilesManager.TilesApp.currentColor]["module"])
                    if (TilesManager.TilesApp.currentColor) {
                        TilesManager.trigger("tiles:action", TilesManager.TilesApp.currentColor, model.id);
                    } else {
                        TilesManager.trigger("tiles:action", model.get("color"));
                    }
                });

                TilesApp.TilesView.on("show", function(){

                    if (!id) {
                        TilesApp.TilesView.children.forEach(function(view){
                            view.$el.addClass('fadeInForward-1').removeClass('fadeOutback');
                        });
                    } else {
                        TilesApp.TilesView.children.forEach(function(view){
                            view.$el.addClass('fadeOutback').removeClass('fadeInForward-1');
                        });
                        var dialog = new  TilesApp.Dialog();
                        var tile = tiles.get(id);
                        var transition = tile.get("transitions")[color];
                        var action = transition["action"].split(/[\.]+/);
                        var method = action.pop();
                        var actionView = TilesManager.module(action.join("."))[method](tile);
                        dialog.on("show", function(){
                            console.log("==========");
                                dialog.formRegion.show(actionView);
                            $("#dialog-region").addClass("slidePageInFromLeft").removeClass('slidePageBackLeft');
                            TilesManager.dialogRegion.show(dialog);
                        });
                        console.log(TilesManager.dialogRegion);


//                            TilesManager.dialogRegion.close();

                    }

                });
            });
            TilesManager.mainRegion.show(TilesApp.TilesView);
        },
        showPlaceholder: function() {
            return  new TilesApp.Undefined();
        }
    }
});