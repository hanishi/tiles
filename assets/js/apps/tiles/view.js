TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template = '<div class="content">' +
                        '<div class="table">' +
                            '<div class="table-cell">' +
                                '<%= icon %><br><%- text %>' +
                            '</div>'
                        '</div>'
                   '</div>';

    TilesApp.Tile = Marionette.ItemView.extend({

        template: function(serialized_model) {

            var view_models = serialized_model["transitions"], view_model;
            /*
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
             icon: "fa fa-camera-retro fa-2x",
             enabled: true,
             content: '<i class="fa fa-camera-retro fa-2x"></i><br>連絡'
             },
             */
            if(!_.isUndefined(TilesManager.TilesApp.currentCategory) && !_.isUndefined(view_models)) {
                return _.template(template, { icon: view_models[TilesManager.TilesApp.currentCategory]['icon'],
                    text: view_models[TilesManager.TilesApp.currentCategory]['text']});
            } else {
                return _.template(template, { icon: serialized_model['icon'],
                    text: serialized_model['text']})
            }

        },

        events: {
            "click": "tileClicked"
        },

        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            if(!this.model.get("enabled")) return;

            if (!_.isUndefined(TilesManager.TilesApp.currentCategory)) {
                var transition = this.model.get("transitions")[TilesManager.TilesApp.currentCategory];
                if (!_.has(transition, "action")) return;
                this.trigger("tiles:action", this.model);
            } else {
                this.trigger("tiles:action", this.model);
            }
        },
        onRender: function () {
            this.$el.addClass("row square bg");
        }
    });

    TilesApp.Frame = Marionette.Layout.extend({
        template: "#frame",
        regions: {
            headerRegion: "#header-region",
            contentRegion: "#content-region",
            footerRegion: "#footer-region"
        }
    });

    TilesApp.Tiles = Marionette.CollectionView.extend({
        tagName: "div",
        className: "squares",
        itemView: TilesApp.Tile
    });

    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});