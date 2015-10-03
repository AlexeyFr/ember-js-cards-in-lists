App.EditCardView = Ember.View.extend({

  templateName: 'editCardView',

  // 27 - это номер клавиши эскейп
  keys : {
    escape : 27
  },

  // При нажатии на эскейп toggleController == false
  keyUp: function( e ){
    if( e.which === this.keys.escape ){
      this.toggleController( false );
    }
  },

  // Когда toggleController == false - он отключает возможность редактировать карточку
  toggleController: function( isEditing ){
    this.set( 'controller.isEditing',  isEditing );
  }
});
