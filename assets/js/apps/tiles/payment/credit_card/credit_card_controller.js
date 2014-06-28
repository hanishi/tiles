TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {
    CreditCard.Controller = {
        view: function() {
            var layout = new TilesManager.TilesApp.Payment.Layout();
            var creditCard = new CreditCard.New();
            var submit = new TilesManager.TilesApp.Payment.Submit();

            layout.on("show", function(){

                layout.paymentMethodRegion.show(creditCard);
                layout.submitRegion.show(submit);
            });
            submit.on("payment:submit", function(){

                var data = Backbone.Syphon.serialize(layout);
                console.log(data);
            });
            return layout;
        }
    }
});