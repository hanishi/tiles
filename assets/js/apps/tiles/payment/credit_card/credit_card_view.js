TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {

    CreditCard.New = Marionette.ItemView.extend({
        className:"credit-card-input no-js",
        template: "#new_credit_card",
        initialize: function(){
          this.$el.prop("id","skeuocard");
        },
        onRender: function () {
            window.card = new Skeuocard(this.$el);
        }
// <div class="credit-card-input no-js" id="skeuocard">
    });

    CreditCard.Registered = Marionette.ItemView.extend({
        template: "#registered_credit_card",
        onRender: function(){

        }
    })
});