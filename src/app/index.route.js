(function() {
  'use strict';

  angular
    .module('testProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('users', {
        url: '/industires/:permitNo/users',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
     .state('industries', {
        url: '/industries',
        templateUrl: 'app/industries/industries.html',
        controller: 'IndustriesController',
        controllerAs: 'industries'
    })
    .state('authority', {
        url: '/authority',
        templateUrl: 'app/authority/authority.html',
        controller: 'AuthorityController',
        controllerAs: 'authority'
    })
    .state('authorityAccount', {
        url: '/authority/accounts',
        templateUrl: 'app/authority/authority-account.html',
        controller: 'AuthorityController',
        controllerAs: 'authority'
    })
    ;

    $urlRouterProvider.otherwise('/');
    
    $locationProvider.html5Mode(true);
  }

})();
