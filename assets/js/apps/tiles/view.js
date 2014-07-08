TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template =
        '<div class="content">' +
            '<img class="rs" src="<%- icon %>"/>' +
        '</div>'
  ;
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

            this.$el.addClass("row square-2 bg " + this.model.get("color"));
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

            this.$el.addClass("row square bg " + TilesManager.TilesApp.currentColor);
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