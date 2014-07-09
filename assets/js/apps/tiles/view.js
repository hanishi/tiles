TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template = '';

    TilesApp.Menu = Marionette.ItemView.extend({

        template: function(serialized_model) {
            var color = serialized_model.color;
            return _.template(template, {color: color, icon: ""})
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

            this.$el.addClass("row square-2 " + this.model.get("background"));
        }
    });

    TilesApp.MenuItem = Marionette.ItemView.extend({

        template: function(serialized_model) {

            var transition = serialized_model["transitions"][TilesManager.TilesApp.currentColor];

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
            var transition = this.model.get("transitions")[TilesManager.TilesApp.currentColor];
            this.bg = transition["background"];
            this.$el.addClass("row square " + (this.model.get("enabled") ? this.bg : ""));
        }

    });

    TilesApp.Action = Marionette.Layout.extend({
        template: "#action",
        regions: {
            headerRegion: "#header-region",
            formRegion: "#form-region",
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