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
                id:0,
                color: "red",

                transitions: {
                    red: { key:"", icon: "戻る", template:"login" },
                    violet: { key:"", icon: "戻る", template:"login"},
                    pink: { key:"", icon: "戻る", template:"login"},
                    orange: { key:"", icon: "戻る", template:"login" },
                    yellow: { key:"", icon: "戻る", template:"login" },
                    green: { key:"", icon: "戻る", template:"login" },
                    cyan: { key:"", icon: "戻る", template:"login" },
                    blue: { key:"", icon: "戻る", template:"login" },
                    darkblue: { key:"", icon: "戻る", template:"login" }
                }
            },
            {
                id:1,
                color: "violet",
                transitions: {
                    red: { key:"", icon: "新規", template:"payment", action: "TilesApp.Payment.CreditCard.Controller.showNewCreditCard"},
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:2,
                color: "pink",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:3,
                color: "orange",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:4,
                color: "yellow",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:5,
                color: "green",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:6,
                color: "cyan",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:7,
                color: "blue",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
            },
            {
                id:8,
                color: "darkblue",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    pink: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    orange: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    yellow: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    green: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    cyan: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    blue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" },
                    darkblue: { key:"", icon: "", template:"login", action: "TilesApp.Controller.showPlaceholder" }
                }
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