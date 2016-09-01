(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('UserdetailsController', UserdetailsController);

  /** @ngInject */
  function UserdetailsController($timeout, $rootScope, $uibModal, $log, $scope, $stateParams, webDevTec, toastr) {
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

    vm.resetUser = resetUser;
    vm.selectedUser =    $rootScope.selectedUser;
    vm.cancelReset = cancelReset;
    vm.goResetUser = goResetUser;
    vm.toggleLockedStatus = toggleLockedStatus;


    console.log('------------------');
    console.log(vm.selectedUser);


    function toggleLockedStatus() {
      // lock / unlock button
      swal({
        title: vm.lockButtonText + ' User',
        text:'You can going to ' + vm.lockButtonText.toLowerCase()  +   ' user <b>' + vm.selectedUser.email +  '</b>.',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
          '<i class="fa"></i>' + vm.lockButtonText + ' User',
        cancelButtonText:
          '<i class="fa "></i> Cancel'
      })
        .then(function() {
          swal(
            vm.lockButtonText ,'User has been ' + vm.lockButtonText.toLowerCase() +'ed!','success'
          );
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', 'timer'
          if (dismiss === 'cancel') {
            swal(
              'Cancelled',
              'User is not been changed!',
              'error'
            );
          }
        })
    }

    function goResetUser(){
      // from confirm button

      console.log(vm.userEmailToReset);

      swal({
        title: 'Reset User',
        //type: 'info',
        // html:
        // 'You can going to reset use with email address <b> ' + vm.selectedUser.email +  '</b>, ' +
        // 'or you can specify a different email address below. ' +
        // '<input type="email">',
        text:'You can going to reset use with email address <b> ' + vm.selectedUser.email +  '</b>, ' +' <br/> or you can specify a different email address below. ',
        input:"text",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
          '<i class="fa"></i> Reset User',
        cancelButtonText:
          '<i class="fa "></i> Cancel'
      })
        .then(function() {
          swal(
            'Reset','User has been reset!','success'
          );
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', 'timer'
          if (dismiss === 'cancel') {
            swal(
              'Cancelled',
              'User is not reset!',
              'error'
            );
          }
        })

    }

    function cancelReset(){

    }

    function resetUser() {
      console.log('inside resetUser function');
      goResetUser();
    }

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
