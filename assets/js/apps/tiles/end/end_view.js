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
             {
             id:0,
             color: "red",
             transitions:[
             { action: "tiles:return" }
             ]
             }
             */
            console.log(this.model);

            var transition = this.model.get("transitions")[TilesManager.currentId];
            console.log(transition);
            this.trigger(transition.action);
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