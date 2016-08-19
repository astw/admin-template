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
      
      vm.backStep = backStep;
      
      function backStep(){ 
  
          $scope.step = 1 ;
          $scope.noSuchUser = false;
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
