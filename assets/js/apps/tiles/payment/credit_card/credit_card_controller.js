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

                TilesManager.Entities.configureStorage(TilesManager.Entities.CreditCardCollection);

                var fetchingCreditCard =  TilesManager.request("creditcard:entities");
                var data = Backbone.Syphon.serialize(layout);
                $.when(fetchingCreditCard.done(function(creditCards) {

                    if (creditCards.length > 0) {
                        var highestId = creditCards.max(function(c) {
                            return c.id;
                        }).get("id");
                        data.id = highestId + 1;
                    } else {
                        data.id = 0;
                    }
                    var newCreditCard = new TilesManager.Entities.CreditCard();
                    if (newCreditCard.save(data)) {


                        var slot =  TilesManager.TilesApp.TilesView.children.find(function(child) {
                            console.log(!child.model.get("transitions")["red"]["action"])
                            return child.model.id > 1 && !child.model.get("transitions")["red"]["action"];
                        });
                        if(slot) {
                            slot.model.save({
                                transitions:{
                                    red:{
                                        key: newCreditCard.id,
                                        icon: "hige.icon",
                                        action:"TilesApp.Payment.Token"}
                                }
                            });
                            slot.render();
                        }
                    }

                }));
            });
            return layout;
        }
    }
});