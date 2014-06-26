TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {

    CreditCard.New = Marionette.ItemView.extend({

        template: "#new_credit_card",

        onRender: function () {
            var card = new Skeuocard(this.$('#skeuocard'));
        }

    });

    CreditCard.Registered = Marionette.ItemView.extend({
        template: "#registered_credit_card",
        onRender: function(){

        }
    })
});