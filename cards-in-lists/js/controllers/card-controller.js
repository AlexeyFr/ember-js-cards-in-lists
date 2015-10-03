App.CardController = Ember.ObjectController.extend({
  // прячим возможность изменения карточки
  isEditing: false,

  newList: null,
  needs: ['lists'],

  // Экшен для удаления карточки из списка
  removeCardFromList : function(){
    var card = this.get( 'model' ),
    list = card.get( 'list' );
    list.get( 'cards' ).removeObject( card );
  },

  // Экшен для обновления карточки
  updateList: function() {
    var card = this.get('model'),
      list = card.get('list'),
      newList = this.get('newList');

    this.removeCardFromList();

    newList.get('cards').pushObject(card);

    card.set('list', this.get('newList'));

    card.save().then(function() {
      list.save();
      newList.save();
    });
  }.observes('newList'),

  actions: {
    // показываем возможность изменения карточки
    editCard: function() {
      this.set('isEditing', true);
    },

    // Экшен для удаление карточки
    deleteCard: function(card) {
      card.destroyRecord();
    },

    // скрывает возможность изменения карточки
    updateCard: function() {
      this.set('isEditing', false);
    }
  }
});
