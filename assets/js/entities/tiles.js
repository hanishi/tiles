TilesManager.module("Entities", function(Entities, TilesManager, Backbone, Marionette, $, _) {
    Entities.Tile = Backbone.Model.extend({
        urlRoot: "tiles"
    });

    Entities.configureStorage(Entities.Tile);

    Entities.TileCollection = Backbone.Collection.extend({
        url: "tiles",
        model: Entities.Tile
    });
    Entities.configureStorage(Entities.TileCollection);

    var initializeTiles = function(){
        var tiles = new Entities.TileCollection([
            {
                id:0,
                color: "red",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:1,
                color: "violet",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:2,
                color: "pink",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:3,
                color: "orange",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:4,
                color: "yellow",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:5,
                color: "green",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:6,
                color: "cyan",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:7,
                color: "blue",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
            {
                id:8,
                color: "darkblue",
                transitions:[
                    { action: "tiles:return" }
                ]
            },
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