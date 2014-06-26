TilesManager.module("TilesApp.Form", function(Form, TilesManager, Backbone, Marionette, $, _) {

    Form.Tile = Marionette.ItemView.extend({

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

    Start.Tiles = Marionette.CompositeView.extend({
        tagName: "div",
        className: "row",
        template: "#tiles-frame",
        itemView: Start.Tile,
        itemViewContainer: "div.col-md-5"
    });
});