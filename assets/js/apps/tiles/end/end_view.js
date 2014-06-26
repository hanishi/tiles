TilesManager.module("TilesApp.End", function(End, TilesManager, Backbone, Marionette, $, _) {
    var template = '<div class="square bg <%- color %>">' +
        '<div class="content">' +
        '<div class="table">'+
        '<div class="table-cell"></div>'+
        '</div>'+
        '</div>'+
        '</div>';
    End.Tile = Marionette.ItemView.extend({

        template: function(serialized_model) {

            return _.template(template, {color: TilesManager.currentColor})
        },
        events: {
            "click": "tileClicked"
        },
        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            /*
             transitions:{
             red: { action:"tiles:red"},
             violet: { action: "tiles:violet"},
             pink: { action: "tiles:pink"},
             orange: { action: "tiles:orange"},
             yellow: { action: "tiles:yellow"},
             green: { action: "tiles:green"},
             cyan: { action: "tiles:cyan"},
             blue: { action: "tiles:blue"},
             darkblue: {action: "tiles:darkblue"}
             }
             */
            this.trigger("tiles:" + TilesManager.currentColor, this.model);
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

    End.Tiles = Marionette.CollectionView.extend({
        tagName: "div",
        className: "row",
        itemView: End.Tile
    });
});