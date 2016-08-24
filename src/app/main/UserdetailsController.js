(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('UserdetailsController', UserdetailsController);

  /** @ngInject */
  function UserdetailsController($timeout, $rootScope, $scope, $stateParams, webDevTec, toastr) {
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


    $rootScope.selectedUser = {
      userId:1,
      firstName: "Eric",
      lastName: "Snell",
      phone:"(772)-496-4160",
      email:"eric@linkoweb.com",
      registeredDate:"8/1/2016/ 13:50 AM",
      status:"InActive",
      locked:"Locked"
    };

    vm.selectedUser =    $rootScope.selectedUser;

    if(vm.selectedUser.status == 'InActive'){
      vm.enabledButtonText = 'Enable';
    } else  {
      vm.enabledButtonText = 'Disable';
    }

    if(vm.selectedUser.locked == 'Locked'){
      vm.lockButtonText = 'Unlock';
    } else  {
      vm.lockButtonText = 'Lock';
    }

  }

})();
