// Определяем маршруты/routes
App.Router.map(function() {
  // Страница которая грузится по умолчанию path: '/'
  this.route('index', { path: '/' });
  this.route('about', { path: '/about' });
  // resource - как колекция роутов
  this.resource('lists');
});
