TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {
    var template = "<p class=\"no-support-warning\"> \
        Either you have Javascript disabled, or you're using an unsupported browser, amigo! That's why you're seeing this old-school credit card input form instead of a fancy new Skeuocard. On the other hand, at least you know it gracefully degrades...\
            <br /> \
            <a href=\"#\" id=\"enable-anyway-btn\">Never tell me the odds! Enable it anyway.</a>\
        </p>\
        <label for=\"cc_type\">Card Type</label>\
        <select name=\"cc_type\">\
            <option value=\"\">...</option>\
            <option value=\"visa\">Visa</option>\
            <option value=\"discover\">Discover</option>\
            <option value=\"mastercard\">MasterCard</option>\
            <option value=\"maestro\">Maestro</option>\
            <option value=\"jcb\">JCB</option>\
            <option value=\"unionpay\">China UnionPay</option>\
            <option value=\"amex\">American Express</option>\
            <option value=\"dinersclubintl\">Diners Club</option>\
        </select>\
        <label for=\"cc_number\">Card Number</label>\
        <input type=\"text\" name=\"cc_number\" id=\"cc_number\" placeholder=\"XXXX XXXX XXXX XXXX\" maxlength=\"19\" size=\"19\">\
            <label for=\"cc_exp_month\">Expiration Month</label>\
            <input type=\"text\" name=\"cc_exp_month\" id=\"cc_exp_month\" placeholder=\"00\">\
                <label for=\"cc_exp_year\">Expiration Year</label>\
                <input type=\"text\" name=\"cc_exp_year\" id=\"cc_exp_year\" placeholder=\"00\">\
                    <label for=\"cc_name\">Cardholder's Name</label>\
                    <input type=\"text\" name=\"cc_name\" id=\"cc_name\" placeholder=\"John Doe\">\
                        <label for=\"cc_cvc\">Card Validation Code</label>\
                        <input type=\"text\" name=\"cc_cvc\" id=\"cc_cvc\" placeholder=\"123\" maxlength=\"3\" size=\"3\">";
    CreditCard.New = Marionette.ItemView.extend({

        tagName: "div",
        className: "credit-card-input no-js",
        template: function(serialized_model) {

            return _.template(template);
        },
        onRender: function () {
            window.card = new Skeuocard(this.$el);
        }
    });

    CreditCard.Registered = Marionette.ItemView.extend({
        tagName: "div",
        className: "credit-card-input no-js",
        template: function(serialized_model) {
            return _.template(template);
        },
        onRender: function () {
            console.log(this.model);
            window.card = new Skeuocard(this.$el,{
                initialValues: {
                    number: this.model.get("cc_number"),
                    expMonth: this.model.get("cc_exp_month"),
                    expYear: this.model.get("cc_exp_year"),
                    name: this.model.get("cc_name"),
                    cvc: this.model.get("cc_cvc")
                }
            });
        }
    })
});