TilesManager.module("TilesApp.Start", function(Start, TilesManager, Backbone, Marionette, $, _) {
    Start.Tile = Marionette.ItemView.extend({
        el: "",
        template: "#tiles-tile",
        events: {
            "click": "tileClicked"
        },
        tileClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();

            this.trigger("tiles:switch", this.model);
        }
    });

    Start.Tiles = Marionette.CollectionView.extend({
        tagName: "div",
        className: "row",
        itemView: Start.Tile
    });
});