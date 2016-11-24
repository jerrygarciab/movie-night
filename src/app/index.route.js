(function() {
  'use strict';

  angular
    .module('movieNight')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('movieInfio', {
        url: '/movie-info',
        templateUrl: 'app/movie-info/movie-info.html',
        controller: 'MovieInfoController',
        controllerAs: 'movieInfo'
      });

    $urlRouterProvider.otherwise('/movie-info');
  }

})();
