(function () {
  'use strict';

  angular
    .module('testProject')
    .controller('AuthorityusersController', AuthorityusersController);


  /* @ngInject */
  function AuthorityusersController(gridDefinitionService, $rootScope, $state, $scope,$stateParams, industryService) {
    var vm = this;
    vm.title = 'AuthorityusersController';

    console.log('in AuthorityusersController');
    var vm = this;

    if($rootScope.user.email == 'Weinandt@linkotechnology.com'){
      $rootScope.user.userType = 'AuthorityUser';
    } else {
      $rootScope.user.userType = 'IndustryUser';
    }

    vm.lockButtonText = 'Unlock';
    vm.enabledButtonText = 'Disable';

    vm.changeUserActiveStatus = changeUserActiveStatus;
    vm.changeUserLockStatus = changeUserLockStatus;
    vm.removeUser = removeUser;
    vm.inviteUser = inviteUser;
    vm.deleteInvitedUser = deleteInvitedUser;

    vm.onchange = onchange;

    var permitNo = $stateParams.permitNo;


    function deleteInvitedUser() {
      console.log(vm.selectedInvitedUser);
      var users = industryService.getIndustryUsers(permitNo);

      $scope.invitedUserGrid.dataSource.remove(vm.selectedInvitedUser);

      industryService.deleteInvitedUser(vm.selectedInvitedUser.email);

    }

    function inviteUser() {
    //   if($rootScope.user.userType == 'AuthorityUser')
    //     $state.go("authority.portal.inviteuser", {action:'invite-au'});
    //   else
    //     $state.go('industry.inviteuser');
    }


    function onInvitedUserChange(arg) {

    }

    function onInvitedUserListGridChange(arg) {
      var selected = $.map(this.select(), function (item) {
        return $(item).text();
      });

      vm.selectedInvitedUser = this.dataItem(this.select());
    }

    function onChange(arg) {
      console.log('in user grid');
      vm.grid = arg.sender;

      var selected = $.map(this.select(), function (item) {
        return $(item).text();

      });

      vm.selectedRow = this.dataItem(this.select());
      $rootScope.selectedUser = vm.selectedRow;

      var disabled = vm.selectedRow.status;
      var locked = vm.selectedRow.locked;

      if (disabled == 'Active') {
        vm.enabledButtonText = 'Disable';
      } else {
        vm.enabledButtonText = 'Enable'
      }

      if (locked == 'Locked') {
        vm.lockButtonText = 'Unlock';
      } else {
        vm.lockButtonText = 'Lock'
      }

      if($rootScope.user.email == 'Weinandt@linkotechnology.com'){
        $rootScope.user.userType = 'AuthorityUser';
      } else {
        $rootScope.user.userType = 'IndustryUser';
      }

      if($rootScope.user.userType == 'AuthorityUser') {
        if ($rootScope.currentState == "authority.portal.authority-users") {
            $state.go("authority.portal.authority-user-details", {userId: $rootScope.selectedUser.userId});
        } else {
          $state.go("authority.portal.industry-user-details", {userId: $rootScope.selectedUser.userId});
        }
      }
      else
        $state.go('industry.industry-user-details');


      $scope.$digest();

      console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }

    var data = industryService.getIndustryUsers(permitNo);
    $scope.users = new kendo.data.DataSource({data: data});
    vm.data = data;

    $scope.industryUsers = {
      dataSource: {
        data: vm.data
      },

      change: onChange,
      selectable: "row",
      sortable: true,
      height: 300,
      noRecords: true,
      messages: {
        noRecords: "There is no data on current page"
      },
      columns: gridDefinitionService.getUserColumsDefinition()
    };

    var invitedUsers = industryService.getInvitedUserList(permitNo);

    $scope.industryInvitedUsers = {
      dataSource: {
        data: invitedUsers
      },

      selectable: "row",
      sortable: true,
      height: 200,
      change: onInvitedUserListGridChange,
      noRecords: true,
      messages: {
        noRecords: "There is no data on current page"
      },
      columns: gridDefinitionService.getIndustryColumnsDefinition()
    };

    activate();

    function activate() {
    }


    function changeUserActiveStatus() {

      swal(
        {
          title: "Are you sure?",
          text: "You will change user active status!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3c8dbc',
          confirmButtonText: "Yes, change it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function (isConfirm) {
          if (isConfirm) {
            vm.selectedRow.status = vm.selectedRow.status == 'Active' ? 'InActive' : 'Active';
            $scope.$digest();

            swal("Changed!", "User active status has been changed.", "success");
          } else {
            swal("Cancelled", "User active status is not changed.", "error");
          }
        }
      );
    }

    function changeUserLockStatus() {

      swal(
        {
          title: "Are you sure?",
          text: "You will change user lock status!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3c8dbc',
          confirmButtonText: "Yes, change it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function (isConfirm) {
          if (isConfirm) {
            // change data

            vm.selectedRow.status = vm.selectedRow.locked == 'Locked' ? 'No' : 'Locked';
            $scope.$digest();

            swal("Changed!", "User lock status has been changed.", "success");
          } else {
            swal("Cancelled", "User lock status is not changed.", "error");
          }
        }
      );
    }

    function removeUser() {

      swal(
        {
          title: "Are you sure?",
          text: "You will remove the user from the industry!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: '#3c8dbc',
          confirmButtonText: "Yes, remove it!",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: false,
          closeOnCancel: false
        },
        function (isConfirm) {
          if (isConfirm) {
            swal("Changed!", "User lock status has been changed.", "success");
            vm.grid.dataSource.remove(vm.selectedRow);
          } else {
            swal("Cancelled", "User lock status is not changed.", "error");
          }
        }
      );
    }
  }

})();


