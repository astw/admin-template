(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('RegistrationiuController', RegistrationiuController);

  /** @ngInject */
  function RegistrationiuController($timeout, $scope, $state, userService) {
    var vm = this;
    vm.userProfile = {};
    vm.step = 1;

    vm.nextStep = nextStep;


    function nextStep(){
      vm.step = 2;
      console.log("next step");

    }

  }
})();
