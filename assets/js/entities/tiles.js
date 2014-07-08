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
                    red: { key:"", icon: "A", template:"TilesApp.Controller.showPlaceholder" },
                    violet: { key:"", icon: "B", template:"TilesApp.Controller.showPlaceholder"}
                },
                enabled: true
            },
            {
                id:1,
                color: "violet",
                transitions: {
                    red: { key:"", icon: "C", template:"payment"},
                    violet: { key:"", icon: "D", template:"login"}
                },
                enabled: true
            },
            {
                id:2,
                color: "pink",
                transitions: {
                    red: { key:"", icon: "E", template:"payment"},
                    violet: { key:"", icon: "F", template:"login"}
                },
                enabled: true
            },
            {
                id:3,
                color: "orange",
                transitions: {
                    red: { key:"", icon: "G", template:"payment"},
                    violet: { key:"", icon: "H", template:"login"}
                },
                enabled: true
            },
            {
                id:4,
                color: "yellow",
                transitions: {
                    red: { key:"", icon: "I", template:"payment"},
                    violet: { key:"", icon: "J", template:"login"}
                },
                enabled: true
            },
            {
                id:5,
                color: "green",
                transitions: {
                    red: { key:"", icon: "K", template:"payment"},
                    violet: { key:"", icon: "L", template:"login"}
                },
                enabled: true
            },
            {
                id:6,
                color: "cyan",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login"}
                },
                enabled: false
            },
            {
                id:7,
                color: "blue",
                transitions: {
                    red: { key:"", icon: "", template:"login", navigate:"violet"},
                    violet: { key:"", icon: "", template:"login", navigate:"red"}
                },
                enabled: true
            },
            {
                id:8,
                color: "darkblue",
                transitions: {
                    red: { },
                    violet: { key:"", icon: "", template:"login"},
                    pink: { key:"", icon: "", template:"login"}
                },
                enabled: false
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