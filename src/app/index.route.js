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
          url:"/",
          templateUrl :"app/layout/plain-index.html"
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

      .state('industry', {
        url:'/industry',
        templateUrl:"app/layout/industry-layout.html",
        abstract:true,
        resolve: { authenticate: authenticate }
      })

      .state('industry.portal', {
        url: '/',
        templateUrl: 'app/industry-portal/industry.portal.html',
        controller: 'IndustryAccountController',
        controllerAs: 'industryportal'
      })
      .state('plain.registration', {
        url:'/industry/registration',
        templateUrl:"app/industry-portal/registration-iu.html",
        controller: 'RegistrationiuController',
        controllerAs: 'iuregistration'
      })

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

      .state('authority.portal.inviteuser', {
        url: '/invite/{:action}',
        templateUrl: 'app/authority-portal/invite-iu/invite-iu.html',
        controller: 'InviteController',
        controllerAs: 'invite'
      })

      .state('authority.portal.create-iu', {
        url: '/create-user',
        templateUrl: 'app/authority-portal/create-iu/create-iu.html',
        controller: 'CreateiuController',
        controllerAs: 'createiu'
      })

      .state('authority.portal.industries', {
        url: '/industries',
        templateUrl: 'app/authority-portal/industries/industries.html',
        controller: 'IndustriesController',
        controllerAs: 'industries'
      })
     .state('authority.portal.industry-details', {
        url: '/industries/:industryNo/details',
        templateUrl: 'app/authority-portal/industries/industry-details.html',
        controller: 'IndustrydetailsController',
        controllerAs: 'industrydetails'
      })
      .state('authority.portal.industry-DEFT', {
        url: '/industries/:permitNo/DataEntryFormTemplate',
        templateUrl: 'app/authority-portal/industries/industry-deft.html',
        controller: 'IndustryDEFTController',
        controllerAs: 'industryDEFT'
      })

      .state('authority.portal.industryUsers', {
        url: '/industries/:permitNo/users',
        templateUrl: 'app/main/main.html',
        controller: 'IndustryusersController',
        controllerAs: 'main'
      })

      .state('authority.portal.authority-users', {
        url: '/users',
        templateUrl: 'app/main/authority-users.html',
        controller: 'AuthorityusersController',
        controllerAs: 'authorityUser'
      })
      .state('authority.portal.authority-user-details', {
        url: '/users/:userId',
        templateUrl: 'app/main/authority-authority-user-details.html',
        controller: 'UserdetailsController',
        controllerAs: 'userdetails'
      })

      .state('authority.portal.industry-user-details', {
        url: '/industires/:permitNo/users/:userId',
        templateUrl: 'app/main/authority-industry-user-details.html',
        controller: 'UserdetailsController',
        controllerAs: 'userdetails'
      })

    .state('authority.portal.registration-requests', {
        url: '/registration-requests',
        templateUrl: 'app/authority-portal/registration/registration-requests.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
    })

      .state('authority.portal.pending-approval-user-details', {
        url: '/registration-requests/user-details',
        templateUrl: 'app/authority-portal/registration/pending-approval-user-details.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
      })

    .state('authority.portal.authorityAccount', {
        url: '/accounts',
        templateUrl: 'app/authority-portal/registration/registration-account.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
    })

    .state('authority.portal.authority-setting', {
        url: '/account/setting',
        templateUrl: 'app/authority-portal/authorities/authority-settings.html',
        controller: 'AuthoritysettingController',
        controllerAs: 'authoritySetting'
    })
      //------------------  this is for profile in authority portal
    .state('authority.portal.profile', {
        url: '/account/profile',
        templateUrl: 'app/profile/my-profile.html',
        controller:'RegistrationiuController',
        controllerAs: 'authorityUserProfile'
      })
    //------------------  this is for profile in industry portal
      .state('industry.profile', {
        url: '/account/profile',
        templateUrl: 'app/profile/my-profile.html',
        controller:'RegistrationiuController',
        controllerAs: 'authorityUserProfile'
      })
      .state('industry.details', {
        url: '/8296/details',
        templateUrl: 'app/industry-portal/industry-details.html',
        controller: 'IndustrydetailsController',
        controllerAs: 'industrydetails'
      })
      .state('industry.industryUsers', {
        url: '/8296/users',
        templateUrl: 'app/main/industry-users.html',
        controller: 'IndustryusersController',
        controllerAs: 'main'
      })
      .state('industry.industry-user-details', {
        url: '/industires/:permitNo/users/:userId',
        templateUrl: 'app/main/industry-user-details.html',
        controller: 'UserdetailsController',
        controllerAs: 'userdetails'
      })

      .state('industry.registration-requests', {
        url: '/registration-requests',
        templateUrl: 'app/authority-portal/registration/registration-requests.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
      })

      .state('industry.pending-approval-user-details', {
        url: '/registration-requests/user-details',
        templateUrl: 'app/authority-portal/registration/pending-approval-user-details.html',
        controller: 'RegistrationrequestsController',
        controllerAs: 'authority'
      })

      .state('industry.inviteuser', {
        url: '/invite',
        templateUrl: 'app/authority-portal/invite-iu/invite-iu.html',
        controller: 'InviteController',
        controllerAs: 'invite'
      })
      .state('industry.downloadsigatory', {
        url: '/download/signatory',
        templateUrl: 'app/authority-portal/download/download-signatory.html',
        controller:'DownloadsignatoryController',
        controllerAs: 'downloadsignatory'
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
        });

        return $q.reject()
      }
    }


    $urlRouterProvider.otherwise('/base/login');

    $locationProvider.html5Mode(true);
  }



})();
