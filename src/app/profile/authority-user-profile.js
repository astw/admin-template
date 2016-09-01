/**
 * Created by swang on 9/1/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .controller('AuthorityuserprofileController', AuthorityuserprofileController);

  /* @ngInject */
  function AuthorityuserprofileController($scope, $rootScope, $localStorage, industryService) {
    var vm = this;
    vm.title = 'AuthorityuserprofileController';

    activate();


    var user = $localStorage["user"];
    var email = user.email;

    var fullUser = industryService.getUserByEmail(email);
    console.log(fullUser);
    $scope.userProfile = fullUser;

    $scope.title1= "My Profile";

    ////////////////

    function activate() {

    }
  }

})();

