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
    $scope.showSecurityQuestions = false ;

    vm.resetUser = resetUser;
    vm.selectedUser =    $rootScope.selectedUser;

    vm.cancelReset = cancelReset;
    vm.goResetUser = goResetUser;
    vm.toggleLockedStatus = toggleLockedStatus;
    vm.toggleEnableIUUserStatus = toggleEnableIUUserStatus;

    vm.toggleUserSecurityPanel = toggleUserSecurityPanel;

    console.log('------------------');
    console.log(vm.selectedUser);
    console.log('---- previous -- step ');
    console.log($rootScope.previousState);

    RefreshButtonText();

    function toggleEnableIUUserStatus() {

      RefreshButtonText();
    }

    function toggleUserSecurityPanel() {

      $log.info("in toggleUserSecurityPanel ");

      if($scope.showSecurityQuestions == true){
        $scope.showSecurityQuestions = false;
      } else {
        $scope.showSecurityQuestions = true;
      }

      $log.info($scope.showSecurityQuestions);
    }

    function toggleLockedStatus() {
      // lock / unlock button
      swal({
        title: vm.lockButtonText + ' User',
        text:'You are going to ' + vm.lockButtonText.toLowerCase()  +   ' user <b>' + vm.selectedUser.email +  '</b>.',
        showCloseButton: true,
        confirmButtonColor: '#3c8dbc',
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

          vm.selectedUser.locked =   vm.selectedUser.locked == "Locked"? "No" : "Locked";
          RefreshButtonText();
          $scope.$apply();

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
        title: 'Reset Registration',
        //type: 'info',
        // html:
        // 'You can going to reset use with email address <b> ' + vm.selectedUser.email +  '</b>, ' +
        // 'or you can specify a different email address below. ' +
        // '<input type="email">',
        text:'What email should be used in the Registration Profile?',
        input:"text",
        inputValue : vm.selectedUser.email,
        confirmButtonColor: '#3c8dbc',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
          '<i class="fa"></i> Reset',
        cancelButtonText:
          '<i class="fa "></i>Cancel'
      })
        .then(function() {
          swal(
            'Reset','User has been reset!','success'
          );
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', 'timer'
          if (dismiss === 'cancel') {
            // swal(
            //   'Cancelled',
            //   'User is not reset!',
            //   'error'
            // );
          }
        })

    }

    function cancelReset(){

    }

    function resetUser() {
      console.log('inside resetUser function');
      goResetUser();
    }

    function RefreshButtonText() {
      if (vm.selectedUser.status == 'Inactive') {
        vm.enabledButtonText = 'Enable';
      } else {
        vm.enabledButtonText = 'Disable';
      }

      if (vm.selectedUser.locked == 'Locked') {
        vm.lockButtonText = 'Unlock';
      } else {
        vm.lockButtonText = 'Lock';
      }
    }

  }

})();
