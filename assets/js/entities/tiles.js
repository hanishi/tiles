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
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-file-pdf-o fa-2x"></i>', text: '2014年<br>8月10日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-book fa-2x"></i>', text:'2014年<br>8月10日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-envelope fa-2x"></i>',
                enabled: true,
                text: '欠席連絡'
            },
            {
                id: 1,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-file-pdf-o fa-2x"></i>', text: '2014年<br>8月11日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-book fa-2x"></i>', text:'2014年<br>8月11日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],

                style: 'primary',
                icon: '<i class="fa fa-file-pdf-o fa-2x"></i>',
                badge: '<span class="badge">3</span>',
                enabled: true,
                text: '配布プリント'
            },
            {
                id: 2,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-file-pdf-o fa-2x"></i>', text: '2014年<br>8月13日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-book fa-2x"></i>', text:'2014年<br>8月12日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],

                style: 'primary',
                icon: '<i class="fa fa-book fa-2x"></i>',
                badge: '<span class="badge">4</span>',
                enabled: true,
                text: '連絡帳'
            },
            {
                id: 3,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", style: 'primary', icon: '<i class="fa fa-book fa-2x"></i>', text:'2014年<br>8月13日', action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-calendar fa-2x"></i>',

                enabled: true,
                text: '週間<br>行事予定'
            },
            {
                id: 4,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-calendar fa-2x"></i>',

                enabled: true,
                text: '月間<br>行事予定'
            },
            {
                id: 5,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-calendar fa-2x"></i>',

                enabled: true,
                text: '年間<br>行事予定'
            },
            {
                id: 6,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "",action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-clock-o fa-2x"></i>',

                enabled: true,
                text: '時間割'
            },
            {
                id: 7,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-history fa-2x"></i>',
                badge: '<span class="badge">2</span>',
                enabled: true,
                text: 'タイムライン'
            },
            {
                id: 8,
                transitions: [
                    { key:"", icon: "fa fa-calendar fa-2x fa-border", text: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-heart fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-cogs fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-comment fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-child fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-edit fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"},
                    { key:"", icon: "fa fa-fax fa-2x fa-border", action:"TilesApp.Controller.showPlaceholder"}
                ],
                action: true,
                style: 'primary',
                icon: '<i class="fa fa-graduation-cap fa-2x"></i>',

                enabled: true,
                text: '学校情報'
            },

            {
                id: 9
            },
            {
                id: 10,
                style: 'primary',
                icon: '<i class="fa fa-th fa-2x"></i>',
                enabled: true,
                text: '戻る' },
            {
               id: 11
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