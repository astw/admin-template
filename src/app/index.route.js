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

      .state("plain.index", {
          url:"/index",
          templateUrl :"app/layout/plain-index.html" ,
//          controller:"LoginController",
//          controllerAs:"login"
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
          url:'/authority',
          templateUrl:"app/layout/authority-layout.html",
          abstract:true,
          resolve: { authenticate: authenticate }
       })

       .state('authority.index', {
            url: '/index',
            templateUrl: '/app/layout/authority-index.html',
            controller: 'MainController',
            controllerAs: 'main'
       })

      .state('authority.portal', {
          templateUrl:"app/layout/authority-portal-layout.html",
          abstract:true
       })

      .state('authority.portal.inviteiu', {
        url: '/inviteiu',
        templateUrl: 'app/authority-portal/invite-iu/invite-iu.html',
        controller: 'InviteiuController',
        controllerAs: 'inviteiu'
      })

      .state('authority.portal.industries', {
        url: '/industries',
        templateUrl: 'app/authority-portal/industries/industries.html',
        controller: 'IndustriesController',
        controllerAs: 'industries'
      })
     .state('authority.portal.industry-details', {
        url: '/industry/details',
        templateUrl: 'app/authority-portal/industries/industry-details.html',
        controller: 'IndustrydetailsController',
        controllerAs: 'industrydetails'
      })
    .state('authority.portal.industryUsers', {
        url: '/industries/:permitNo/users',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('authority.portal.industry-user-details', {
        url: '/industires/:permitNo/users/:userId',
        templateUrl: 'app/main/user-details.html',
        controller: 'UserdetailsController',
        controllerAs: 'userdetails'
      })
    .state('authority.portal.registration-requests', {
        url: '/registration-requests',
        templateUrl: 'app/authority-portal/registration/registration-requests.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
    })
    .state('authority.portal.authorityAccount', {
        url: '/accounts',
        templateUrl: 'app/authority-portal/registration/registration-account.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
    })
    ;

       /** @ngInject */
     function authenticate($q, $rootScope, $state, $timeout,$localStorage) {
      var user = $localStorage['user'];

      if (user) {
        $rootScope.user = user;
        // Resolve the promise successfully
        return $q.when()
      } else {

        $timeout(function() {
          $state.go('plain.login')
        })

        return $q.reject()
      }
    }


    $urlRouterProvider.otherwise('/base/index');

    $locationProvider.html5Mode(true);
  }



})();
