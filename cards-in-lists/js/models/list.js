// Связь между моделями, у List есть много Card
App.List = DS.Model.extend({
  listName: DS.attr('string'),
  cards: DS.hasMany('card', {
    // Асинхронный доступ к данным
    async: true
  })
});

// Тестовые данные для модели List
App.List.FIXTURES = [
  {
    id: "1",
    listName: "listName 1 - ToDo",
    cards: []
  },
  {
    id: "2",
    listName: "listName 2 - Doing",
    cards: ["3","4","5"]
  },
  {
    id: "3",
    listName: "listName 3 - Done",
    cards: []
  }
];
