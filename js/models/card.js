// Связь между моделями, каждая Card принадлежит определенной List
App.Card = DS.Model.extend({
  description: DS.attr('string'),
  list: DS.belongsTo('list')
});

// Тестовые данные для модели Card
App.Card.FIXTURES = [
  {
    id: "3",
    description: "Card desc 3 - Fix bug with player",
    list: 2
  },
  {
    id: "4",
    description: "Card desc 4 - Add feature with D3",
    list: 2
  },
  {
    id: "5",
    description: "Card desc 5 - Learn EmberJS",
    list: 2
  }
];
