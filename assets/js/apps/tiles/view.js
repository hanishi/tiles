TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template = '<div class="content">' +
                        '<div class="table">' +
                            '<div class="table-cell">' +
                                '<i class="<%- icon %>"></i><br><%- text %>' +
                            '</div>'
                        '</div>'
                   '</div>';

    TilesApp.Menu = Marionette.ItemView.extend({

        template: function(serialized_model) {
            var view_model;
            if(_.has(serialized_model, "transitions")) {
                view_model = 
            }
            return _.template(template, { icon: serialized_model['icon'], text:  serialized_model['text']})
        },


        aaaa: function(serialized_model) {

            var transition = serialized_model["transitions"][TilesManager.TilesApp.currentCategory];

            return _.template(template, { icon: transition? transition.icon : ""})
        },

        events: {
            "click": "tileClicked"
        },
        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("tiles:action", this.model);

        },
        onRender: function () {

            this.$el.addClass("row square bg " + this.model.get("icon"));
        }
    });

    TilesApp.MenuItem = Marionette.ItemView.extend({

        template: function(serialized_model) {

            var transition = serialized_model["transitions"][TilesManager.TilesApp.currentCategory];

            return _.template(template, { icon: transition? transition.icon : ""})
        },
        events: {
            "click": "tileClicked"
        },

        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var transition = this.model.get("transitions")[TilesManager.TilesApp.currentCategory];
            if (!this.model.get("enabled") || !_.has(transition, "action")) return;
                this.trigger("tiles:action", this.model);

        },
        onRender: function () {
            var transition = this.model.get("transitions")[TilesManager.TilesApp.currentCategory];
            this.$el.addClass("row square bg " + (this.model.get("enabled") ? transition["icon"] : ""));
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

    TilesApp.Menus = Marionette.CollectionView.extend({
        tagName: "div",
        className: "squares",
        itemView: TilesApp.Menu
    });

    TilesApp.MenuItems = Marionette.CollectionView.extend({
        tagName: "div",
        className: "squares",
        itemView: TilesApp.MenuItem
    });


    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});