(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('UserdetailsController', UserdetailsController);

  /** @ngInject */
  function UserdetailsController($timeout, $rootScope, $scope, $stateParams, webDevTec, toastr) {
    var vm = this;
    console.log('selected industry=',$rootScope.selectedIndustry)
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1471276328751;
    vm.testMessage = "this is a test message";

    vm.lockButtonText = 'Unlock';
    vm.enabledButtonText = 'Disable';

    // vm.changeUserActiveStatus = changeUserActiveStatus;
    // vm.changeUserLockStatus = changeUserLockStatus;
    // vm.removeUser = removeUser;


    // $rootScope.selectedUser = {
    //   userId:1,
    //   firstName: "Eric",
    //   lastName: "Snell",
    //   phone:"(772)-496-4160",
    //   email:"eric@linkoweb.com",
    //   registeredDate:"06-01-2016",
    //   status:"Active",
    //   locked:"UnLocked"
    // };

    vm.selectedUser =    $rootScope.selectedUser;

    console.log('------------------');
    console.log(vm.selectedUser);

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
