Marionette.Region.Main = Marionette.Region.extend({

    onShow: function(view) {
        this.listenTo(view, "dialog:close", this.closeDialog);
        view.$el.addClass('animated bounceIn');
        view.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated bounceIn');
        });
    },

    closeDialog: function() {
        this.stopListening();
        this.close();
        this.$el.addClass('animated pulse');
    }
});

Marionette.Region.Dialog = Marionette.Region.extend({

    onShow: function(view) {
        this.listenTo(view, "dialog:close", this.closeDialog);
        view.$el.addClass('animated slideInDown');
        view.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated slideInDown');
        });
    },

    closeDialog: function() {
        this.stopListening();
        this.close();
        this.$el.addClass('animated pulse');
    }
});