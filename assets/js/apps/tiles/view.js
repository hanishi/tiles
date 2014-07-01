TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template = '<li class="<%- color %> tile tile-small tile tile-2 slideTextRight" >' +
        '<div><%- icon %></div>' +
    '</li>';
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
            // Get rid of that pesky wrapping-div.
            // Assumes 1 child element present in template.
            this.$el = this.$el.children();
            // Unwrap the element to prevent infinitely
            // nesting elements during re-render.
            this.$el.unwrap();
            this.setElement(this.$el);
        }
    });

    TilesApp.MenuItem = Marionette.ItemView.extend({

        template: function(serialized_model) {

            var transition = serialized_model["transitions"][TilesManager.TilesApp.currentColor];
            return _.template(template, {color: TilesManager.TilesApp.currentColor, icon: transition? transition.icon : ""})
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
            // Get rid of that pesky wrapping-div.
            // Assumes 1 child element present in template.
            this.$el = this.$el.children();
            // Unwrap the element to prevent infinitely
            // nesting elements during re-render.
            this.$el.unwrap();
            this.setElement(this.$el);
        }

    });

    TilesApp.Menus = Marionette.CollectionView.extend({
        tagName: "div",
        className: "col1 clearfix",
        itemView: TilesApp.Menu
    });

    TilesApp.MenuItems = Marionette.CollectionView.extend({
        tagName: "div",
        className: "col1 clearfix",
        itemView: TilesApp.MenuItem
    });

    TilesApp.Login = Marionette.Layout.extend({
        template: "#login",
        className:"row",
        regions:{
            tilesRegion: "#tiles-region",
            actionRegion: "#action-region"
        }
    });

    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});