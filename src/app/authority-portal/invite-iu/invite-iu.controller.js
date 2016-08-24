(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('InviteiuController', InviteiuController);

  /** @ngInject */
  function InviteiuController($timeout, $scope, $state, userService) {
    var vm = this;

      $scope.step =1 ;
      vm.inviteUser = inviteUser;
      vm.sendInvitation = sendInvitation;
      vm.createUser = createUser;
      vm.cancel = cancel;
      vm.backStep = backStep;

      var userList = userService.getUserList();

      function sendInvitation(){
        $scope.step = 3;
      }

      function backStep(){

          $scope.step = 1 ;
          $scope.noSuchUser = false;
      }

      function createUser(){
         $state.go("authority.portal.create-iu");
      }

      function cancel(){
         //$state.go("authority.portal.industryUsers");
         $scope.step = 2
      }

      function inviteUser(){
          var findUser = userList.find(function(item){
              return vm.userEmail == item.email;
          });


          if(findUser == null){
              $scope.noSuchUser = true;
              $scope.step = -1;
              return;
          }

          vm.userLastName = findUser.lastName;
          vm.userFirstName = findUser.firstName;

          $scope.step = 2;
      }

  }
})();
