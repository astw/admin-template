(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('InviteiuController', InviteiuController);

  /** @ngInject */
  function InviteiuController($timeout, $scope, $state) {
    var vm = this;

      $scope.step =1 ;
      vm.inviteUser = inviteUser;
      vm.sendInvitation = sendInvitation;
      vm.createUser = createUser;
      vm.cancel = cancel;
      vm.backStep = backStep;


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
          if(vm.userEmail !== 'aa@linko.com'  && vm.userEmail !== 'bb@linko.com'){
              $scope.noSuchUser = true;
              $scope.step = -1;
              return;
          }

           
          $scope.step = 2;
      }

  }
})();
