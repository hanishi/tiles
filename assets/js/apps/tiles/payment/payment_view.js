TilesManager.module("TilesApp.Payment", function(Payment, TilesManager, Backbone, Marionette, $, _) {

    Payment.Layout = Marionette.Layout.extend({

        template: "#payment-form",
        regions: {
            paymentMethodRegion: "#payment-method-region",
            pointRegion: "#point-region",
            amountRegion: "#amount-region",
            submitRegion: "#submit-region"
        }
    });

    Payment.Amount= Marionette.ItemView.extend({
        template: "#payment-amount"
    });

    Payment.Submit = Marionette.ItemView.extend({
        template: "#payment-submit",
        triggers: {
            "click button": "payment:submit"
        }
    });

});