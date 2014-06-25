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
            {id:1, color: "red"},
            {id:2, color: "violet"},
            {id:3, color: "pink"},
            {id:4, color: "orange"},
            {id:5, color: "yellow"},
            {id:6, color: "green"},
            {id:7, color: "cyan"},
            {id:8, color: "blue"},
            {id:9, color: "darkblue"},
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
    })
});