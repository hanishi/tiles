TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template = '<div class="content">' +

                        '<button class="btn btn-<%- style %> btn-block ">' +
                            '<div class="content-badge"><%= badge %></div>' +
                            '<%= icon %><br><%= text %>' +
                        '</button>'
                   '</div>';

    TilesApp.Tile = Marionette.ItemView.extend({

        template: function(serialized_model) {

            var view_models = serialized_model["transitions"];

            if(!_.isUndefined(TilesManager.TilesApp.currentCategory) && !_.isUndefined(view_models)) {

                return _.template(template, {

                    badge: view_models[TilesManager.TilesApp.currentCategory]['badge'],
                    style: view_models[TilesManager.TilesApp.currentCategory]['style'],
                    icon: view_models[TilesManager.TilesApp.currentCategory]['icon'],
                    text: view_models[TilesManager.TilesApp.currentCategory]['text']
                });
            }

            if (serialized_model["enabled"]) {
                if(serialized_model.id < 9 || !_.isUndefined(TilesManager.TilesApp.currentCategory) )
                return _.template(template, {
                    badge: serialized_model['badge'],
                    style: serialized_model['style'],
                    icon: serialized_model['icon'],
                    text: serialized_model['text']
                });
            }
        },

        events: {
            "click": "tileClicked"
        },

        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if(!this.model.get("enabled")) return;
            var view_models = this.model.get("transitions");

            if (!_.isUndefined(TilesManager.TilesApp.currentCategory) && !_.isUndefined(view_models)) {

                if (!_.isUndefined(view_models)) {
                    var transition = view_models[TilesManager.TilesApp.currentCategory];
                    if (!_.has(transition, "action")) return;
                } else {
                    if (!_.has(this.model.get("action"))) return;
                }

                this.trigger("tiles:action", this.model);
            } else {
                this.trigger("tiles:action", this.model);
            }
        },
        onRender: function () {
            if(this.model.get("enabled"))
                this.$el.addClass("row square bg");
            else
                this.$el.addClass("row empty");
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

    TilesApp.Footer = Marionette.ItemView.extend({

    });

    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});