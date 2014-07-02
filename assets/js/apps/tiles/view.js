TilesManager.module("TilesApp", function(TilesApp, TilesManager, Backbone, Marionette, $, _) {
    var template =
        '<div class="content">' +
        '<div class="table">'+
        '<div class="table-cell">' +
        '<%- icon %>'
        '</div>'+
        '</div>'+
        '</div>';
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

            this.$el.addClass("square bg " + this.model.get("color"));
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

            this.$el.addClass("square bg " + TilesManager.TilesApp.currentColor);
        }

    });

    TilesApp.Menus = Marionette.CollectionView.extend({
        tagName: "div",
        className: "col-xs-12 col-sm-6 col-md-6 col-lg-6",
        itemView: TilesApp.Menu
    });

    TilesApp.MenuItems = Marionette.CollectionView.extend({
        tagName: "div",
        className: "col-xs-12 col-sm-6 col-md-6 col-lg-6",
        itemView: TilesApp.MenuItem
    });

    TilesApp.Dialog = Marionette.Layout.extend({
        template: "#action",
        regions: {
            headerRegion: "#header-region",
            formRegion: "#form-region",
            footerRegion: "#footer-region"
        }
    });

    TilesApp.Undefined = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});