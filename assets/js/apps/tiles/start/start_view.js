TilesManager.module("TilesApp.Start", function(Start, TilesManager, Backbone, Marionette, $, _) {
    var template = '<div class="square bg <%- color %>">' +
        '<div class="content">' +
        '<div class="table">'+
            '<div class="table-cell"></div>'+
        '</div>'+
        '</div>'+
    '</div>';
    Start.Tile = Marionette.ItemView.extend({

        template: function(serialized_model) {
            var color = serialized_model.color;
            return _.template(template, {color: color})
        },

        events: {
            "click": "tileClicked"
        },
        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();

            this.trigger("tiles:show", this.model);
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

    Start.Tiles = Marionette.CollectionView.extend({
        tagName: "div",
        className: "div.col-md-5",
        itemView: Start.Tile
    });

    Start.Login = Marionette.ItemView.extend({
        template: "#placeholder"
    });
});