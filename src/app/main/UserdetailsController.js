(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $rootScope, $scope, $stateParams, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1471276328751;
    vm.testMessage = "this is a test message";

    vm.lockButtonText = 'Unlock';
    vm.enabledButtonText = 'Disable';

    // vm.changeUserActiveStatus = changeUserActiveStatus;
    // vm.changeUserLockStatus = changeUserLockStatus;
    // vm.removeUser = removeUser;


  }

})();
