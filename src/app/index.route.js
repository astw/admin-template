(function() {
  'use strict';

  angular
    .module('testProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state("plain", { 
          url:"/base",
          templateUrl :"app/layout/plain-layout.html", 
          abstract:true
       })
      .state("plain.login", { 
          url:"/login",
          templateUrl :"app/auth/login/login.html" ,
          controller:"LoginController",
          controllerAs:"login"
       })

      .state("plain.forget-password", { 
          url:"/forget-password",
          templateUrl :"app/auth/forget-password/forget-password.html" ,
          controller:"LoginController",
          controllerAs:"login"
       })
    
//      .state("plain.forget-password", { 
//          url:"/forget-password",
//          templateUrl :"app/login/login.html" ,
//          controller:"LoginController",
//          controllerAs:"login"
//       })
    
      .state('authority', {
          templateUrl:"app/layout/authority-layout.html",
          abstract:true 
       })
      .state('authority.users', {
        url: '/industires/:permitNo/users',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
     .state('authority.industries', {
        url: '/industries',
        templateUrl: 'app/industries/industries.html',
        controller: 'IndustriesController',
        controllerAs: 'industries'
    })
    .state('authority.authority', {
        url: '/authority',
        templateUrl: 'app/authority/authority.html',
        controller: 'AuthorityController',
        controllerAs: 'authority'
    })
    .state('authority.authorityAccount', {
        url: '/authority/accounts',
        templateUrl: 'app/authority/authority-account.html',
        controller: 'AuthorityController',
        controllerAs: 'authority'
    })
    ;

    $urlRouterProvider.otherwise('/login');
    
    $locationProvider.html5Mode(true);
  }

})();
