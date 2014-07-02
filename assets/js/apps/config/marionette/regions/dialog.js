Marionette.Region.Dialog = Marionette.Region.extend({

    onShow: function(view) {
        this.listenTo(view, "dialog:close", this.closeDialog);

        this.$el.addClass('animated fadeIn');

        console.log("AAAAA");
    },

    closeDialog: function() {
        this.stopListening();
        this.close();
        this.$el.addClass('animated rollOut');
    }
});