TilesManager.module("Entities", function(Entities, TilesManager, Backbone, Marionette, $, _) {
    Entities.Tile = Backbone.Model.extend({
        urlRoot: "tiles"
    });

    Entities.configureStorage(Entities.Tile);

    Entities.TileCollection = Backbone.Collection.extend({
        url: "tiles",
        model: Entities.Tile,
        comparator: "id"
    });
    Entities.configureStorage(Entities.TileCollection);

    var initializeTiles = function(){
        var tiles = new Entities.TileCollection([
            {
                id: 0,
                transitions: [
                    { key:"", icon: "credit_cards_color", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "",
                enabled: true,
                content: '<i class="fa fa-camera-retro fa-2x"></i><br>連絡' },
            {
                id: 1,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg violet",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 2,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg pink",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 3,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg orange",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 4,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg yellow",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 5,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg green",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 6,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg cyan",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 7,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg blue",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            },
            {
                id: 8,
                transitions: [
                    { key:"", icon: "bg red", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg violet", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg pink", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg orange", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg yellow", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg green", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg cyan", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg blue", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "bg darkblue", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "bg darkblue",
                enabled: true,
                content: '<i class="icon-ok"></i>'
            }
        ]);
        tiles.forEach(function(tile){
            tile.save();
        });
        return tiles.models;
    };

    var API = {
        getTileEntities: function(){
            var tiles = new Entities.TileCollection();
            var defer = $.Deferred();
            tiles.fetch({
                success: function(data){
                    defer.resolve(data);
                }
            });
            var promise = defer.promise();
            $.when(promise).done(function(tiles){
                if(tiles.length === 0) {
                    var models = initializeTiles();
                    tiles.reset(models);
                }
            });
            return promise;
        },

        getTileEntity: function(tileId) {
            var tile = new Entities.Tile({id: tileId});
            var defer = $.Deferred();
            setTimeout(function(){
                tile.fetch({
                    success: function(data) {
                        defer.resolve(data);
                    },
                    error: function(data) {
                        defer.resolve(undefined);
                    }
                });
            }, 2000);
            return defer.promise();
        }
    };
    TilesManager.reqres.setHandler("tiles:entities", function(){
        return API.getTileEntities();
    });
});