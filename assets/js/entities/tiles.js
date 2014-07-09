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
                    red: { key:"", icon: "A", template:"TilesApp.Controller.showPlaceholder",  background: "credit_cards_color" },
                    violet: { key:"", icon: "B", template:"TilesApp.Controller.showPlaceholder",  background: "cvs1"}
                },
                background: "credit_cards_font",
                enabled: true
            },
            {
                id:1,
                color: "violet",
                transitions: {
                    red: { key:"", icon: "C", template:"payment", background: "credit_cards_color" },
                    violet: { key:"", icon: "D", template:"login", background: "cvs2"}
                },
                background: "shop_font",
                enabled: true
            },
            {
                id:2,
                color: "pink",
                transitions: {
                    red: { key:"", icon: "E", template:"payment",  background: "credit_cards_color" },
                    violet: { key:"", icon: "F", template:"login",  background: "cvs3"}
                },
                enabled: true
            },
            {
                id:3,
                color: "orange",
                transitions: {
                    red: { key:"", icon: "G", template:"payment",  background: "credit_cards_color"},
                    violet: { key:"", icon: "H", template:"login",  background: "cvs4"}
                },
                enabled: true
            },
            {
                id:4,
                color: "yellow",
                transitions: {
                    red: { key:"", icon: "I", template:"payment",  background: "credit_cards_color"},
                    violet: { key:"", icon: "J", template:"login",  background: "cvs5"}
                },
                enabled: true
            },
            {
                id:5,
                color: "green",
                transitions: {
                    red: { key:"", icon: "K", template:"payment",  background: "credit_cards_color"},
                    violet: { key:"", icon: "L", template:"login",  background: "cvs6"}
                },
                enabled: true
            },
            {
                id:6,
                color: "cyan",
                transitions: {
                    red: { },
                    violet: { }
                },
                enabled: false
            },
            {
                id:7,
                color: "blue",
                transitions: {
                    red: { key:"", icon: "", template:"login", navigate:"violet", background:"shop_font"},
                    violet: { key:"", icon: "", template:"login", navigate:"red", background:"credit_cards_font"}
                },
                background: "",
                enabled: true
            },
            {
                id:8,
                color: "darkblue",
                transitions: {
                    red: { },
                    violet: { }
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