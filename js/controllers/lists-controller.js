App.ListsController = Ember.ArrayController.extend({
  actions: {
    // Экшен для сохранение новой записи
    createList: function() {
      var list = this.store.createRecord('list', {
        listName: this.get('listName')
      });

      // Чистим поле input чтобы после сохранения нам показывал placeholder
      this.set('listName', '');

      // Команда для сохранение в бд, но бд нету.
      list.save();
    }
  }
});
