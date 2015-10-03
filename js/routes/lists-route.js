// Указываем имя модели в единственном числе
App.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
});
// Возвращает данные через GET запрос, в виде масива lists: [ {}, {}, {} ...........]