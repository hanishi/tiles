Marionette.Region.Dialog = Marionette.Region.extend({

    onShow: function(view) {
        this.listenTo(view, "dialog:close", this.closeDialog);
        this.$el.addClass('animated slideInRight');
        this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated slideInRight');
        });
    },

    closeDialog: function() {
        this.stopListening();
        this.close();
        this.$el.addClass('animated rollOut');
    }
});