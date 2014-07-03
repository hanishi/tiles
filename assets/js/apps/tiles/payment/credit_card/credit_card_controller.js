TilesManager.module("TilesApp.Payment.CreditCard", function(CreditCard, TilesManager, Backbone, Marionette, $, _) {
    CreditCard.Controller = {
        showNewCreditCard: function(tile) {
            var layout = new TilesManager.TilesApp.Payment.Layout();
            var creditCard = new CreditCard.New();
            var point = new TilesManager.TilesApp.Payment.Point();
            var amount = new TilesManager.TilesApp.Payment.Amount();
            var submit = new TilesManager.TilesApp.Payment.Submit();

            layout.on("show", function(){

                layout.paymentMethodRegion.show(creditCard);
                layout.pointRegion.show(point);
                layout.amountRegion.show(amount);
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
                                        icon: "カード",
                                        template: "payment",
                                        action:"TilesApp.Payment.CreditCard.Controller.showRegisteredCreditCard"}
                                }
                            });
                            slot.render();
                        }
                    }
                }));
            });
            return layout;
        },
        showRegisteredCreditCard: function(tile) {

            var fetchingCreditCard =  TilesManager.request("creditcard:entity", tile.get("transitions")["red"]["key"]);

            var layout = new TilesManager.TilesApp.Payment.Layout();

            var submit = new TilesManager.TilesApp.Payment.Submit();

            submit.on("payment:submit", function(){

            });
            $.when(fetchingCreditCard.done(function(model) {
                var creditCard = new CreditCard.Registered({model: model});
                layout.on("show", function(){
                    layout.paymentMethodRegion.show(creditCard);
                    layout.submitRegion.show(submit);
                });
            }));

            return layout;
        }
    }
});