TilesManager.module("Entities", function(Entities, TilesManager, Backbone, Marionette, $, _) {
    Entities.CreditCard = Backbone.Model.extend({
        urlRoot: "creditcards"
    });

    Entities.configureStorage(Entities.CreditCard);

    Entities.CreditCardCollection = Backbone.Collection.extend({
        url: "creditcards",
        model: Entities.CreditCard
    });
    Entities.configureStorage(Entities.CreditCardCollection);

    var initializeCreditCards = function(){
        var creditcards = new Entities.CreditCardCollection([
            {
                id:0,
                cc_type: "visa",
                cc_number: "",
                cc_exp_month: "",
                cc_exp_year: "",
                cc_name: "",
                cc_cvc:""
            },
            {
                id:1,
                cc_type: "master",
                cc_number: "",
                cc_exp_month: "",
                cc_exp_year: "",
                cc_name: "",
                cc_cvc:""
            },
            {
                id:2,
                cc_type: "amex",
                cc_number: "",
                cc_exp_month: "",
                cc_exp_year: "",
                cc_name: "",
                cc_cvc:""
            }
        ]);
        creditcards.forEach(function(creditcard){
            creditcard.save();
        });
        return creditcards.models;
    };

    var API = {
        getCreditCardEntities: function(){
            var creditCards = new Entities.CreditCardCollection();
            var defer = $.Deferred();
            creditCards.fetch({
                success: function(data){
                    defer.resolve(data);
                }
            });
            var promise = defer.promise();
            return promise;
        },

        getCreditCardEntity: function(id) {
            var tile = new Entities.CreditCard({id: id});
            var defer = $.Deferred();

            tile.fetch({
                success: function(data) {
                    defer.resolve(data);
                },
                error: function(data) {
                    defer.resolve(undefined);
                }
            });

            return defer.promise();
        }
    };
    TilesManager.reqres.setHandler("creditcard:entities", function(){
        return API.getCreditCardEntities();
    });
    TilesManager.reqres.setHandler("creditcard:entity", function(id){
        return API.getCreditCardEntity(id);
    });
});