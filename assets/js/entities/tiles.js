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
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action:"TilesApp.Controller.showPlaceholder",
                icon: "fa fa-camera-retro fa-3x fa-border",
                enabled: true,
                text: '連絡'
            },
            {
                id: 1,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-3x fa-border",
                enabled: true,
                text: '連絡'
            },
            {
                id: 2,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
            },
            {
                id: 3,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
            },
            {
                id: 4,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                action:"TilesApp.Controller.showPlaceholder",
                enabled: true,
                text: '連絡'
            },
            {
                id: 5,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
            },
            {
                id: 6,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
            },
            {
                id: 7,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
            },
            {
                id: 8,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-book fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-phone fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x", action:"TilesApp.Controller.showPlaceholder"}
                ],
                icon: "fa fa-camera-retro fa-2x",
                enabled: true,
                text: '連絡'
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