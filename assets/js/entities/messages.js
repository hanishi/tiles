TilesManager.module("Entities", function(Entities, TilesManager, Backbone, Marionette, $, _) {
    Entities.Message = Backbone.Model.extend({
        urlRoot: "messages"
    });

    Entities.configureStorage(Entities.Message);

    Entities.MessageCollection = Backbone.Collection.extend({
        url: "messages",
        model: Entities.Message
    });
    Entities.configureStorage(Entities.MessageCollection);

    var initializeCreditCards = function(){
        var messages = new Entities.MessageCollection([
            {
                id: 0,
                key: ''
            },
            {
                id: 1,
                key: ''
            },
            {
                id: 2,
                key: ''
            }
        ]);
        messages.forEach(function(message){
            message.save();
        });
        return messages.models;
    };

    var API = {
        getMessageEntities: function(){
            var creditCards = new Entities.MessageCollection();
            var defer = $.Deferred();
            creditCards.fetch({
                success: function(data){
                    defer.resolve(data);
                }
            });
            var promise = defer.promise();
            return promise;
        },

        getMessageEntity: function(id) {
            var tile = new Entities.Message({id: id});
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
    TilesManager.reqres.setHandler("messages:entities", function(){
        return API.getMessageEntities();
    });
    TilesManager.reqres.setHandler("messages:entity", function(id){
        return API.getMessageEntity(id);
    });
});