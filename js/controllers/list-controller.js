App.ListController = Ember.ObjectController.extend({
  needs: ['lists'],

  // Экшен для удаления списка
  actions: {
    removeList: function() {
      // Сохранить в переменную модель данного объекта
      var list = this.get('model');
      list.destroyRecord();
    },

    // Экшен создание карточки для конкретного списка
    createCard: function() {
      // Находим текущий список
      var list = this.get('model'),
        card;

      // Сохраняем в кард дискрипшен
      card = this.store.createRecord('card', {
        description: this.get('cardDescription'),
        list: list
      });

      // Команда для сохранение в бд, но бд нету.
      card.save();

      // Чистим поле input чтобы после сохранения нам показывал placeholder
      this.set('cardDescription', '');
    },
  }
});
