(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('IndustryusersController', IndustryusersController);

  /** @ngInject */
  function IndustryusersController($timeout, $rootScope, $state, $scope,$stateParams, industryService) {
    var vm = this;

    if($rootScope.user.userType == 'AuthorityUser' &&  !$rootScope.selectedIndustry ){
      $state.go('authority.portal.industries');
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

      console.log('to delete user');
      console.log(vm.selectedInvitedUser);

      industryService.deleteInvitedUser(vm.selectedInvitedUser.email);


      // vm.invitedUserGrid.setDataSource(new kendo.data.DataSource({
      //           data: filterData
      //       }));

      // vm.invitedUserGrid.refresh();
      //$scope.invitedUserGrid.refresh();
    }

    function inviteUser() {
      if($rootScope.user.userType == 'AuthorityUser')
          $state.go("authority.portal.inviteiu");
      else
          $state.go('industry.inviteuser');
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

      if($rootScope.user.userType == 'AuthorityUser')
        $state.go("authority.portal.industry-user-details", {userId: $rootScope.selectedUser.userId});
      else
        $state.go('industry.industry-user-details');


      $scope.$digest();

      console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }

    var data = industryService.getIndustryUsers(permitNo);
    $scope.users = new kendo.data.DataSource({data: data});
    vm.data = data;

//industryUsers  industryInvitedUsers  mainGridOptions_2
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
      columns: [
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "firstName",
          title: "First Name",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "lastName",
          title: "Last Name",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "phone",
          title: "Phone",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "email",
          title: "Email",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "registeredDate",
          title: "Date Registered",
          minScreenWidth: 1200,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "10%",
          field: "status",
          title: "Status",
          minScreenWidth: 1200,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "10%",
          field: "locked",
          title: "Account Locked?",
          minScreenWidth: 1200
        },
        {
          template: "<div class='fa fa-chevron-circle-right fa-lg pull-right'>" + "</div>",
          width: 60,
          filterable: false

        },
        {

          headerAttributes: {
            "class": "hidden-md hidden-lg visible-sm visible-xs"
          },
          title: "User Information",
//             headerTemplate:'<label class="visible-sm visible-xs"> User Information </label>',
          template: "<div class=' visible-sm visible-xs'>" +
          "<dt>First Name. </dt>" +
          "<dd>#:firstName #</dd>" +
          "<dt>Last Name: </dt>" +
          "<dd>#:lastName#</dd>" +
          "<dt>Phone </dt>" +
          "<dd>#:phone #</dd>" +

          "<dt>Email </dt>" +
          "<dd>#:email #</dd>" +
          "<dt>Registered Date: </dt>" +
          "<dd>#:registeredDate #</dd>" +
          "<dt>Status </dt>" +
          "<dd>#:status# </dd>" +
          "<dt>Locked </dt>" +
          "<dd>#:locked# </dd>" +

          "</div>"

        }
      ]
    }

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
      columns: [
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "firstName",
          title: "First Name",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "12.5%",
          field: "lastName",
          title: "Last Name",
          minScreenWidth: 960,
        },

        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "email",
          title: "Email",
          minScreenWidth: 960,
        },
        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "15%",
          field: "dateInvited",
          title: "Date Invited",
          minScreenWidth: 1200,
          format: "{0:MM-dd-yyyy h:mm tt}"
        },

        {
          headerAttributes: {
            "class": "visible-lg visible-sm visible-md"
          },
          width: "20%",
          field: "inviteExpires",
          title: "Invite Expires",
          format: "{0:MM-dd-yyyy h:mm tt}"
        },
        {

          headerAttributes: {
            "class": "hidden-md hidden-lg visible-sm visible-xs"
          },
          title: "Invited Users",
          //          headerTemplate:'<label class="visible-sm visible-xs"> Invited Users </label>',
          template: "<div class=' visible-sm visible-xs'>" +
          "<dt>First Name. </dt>" +
          "<dd>#:firstName #</dd>" +
          "<dt>Last Name: </dt>" +
          "<dd>#:lastName#</dd>" +

          "<dt>Email </dt>" +
          "<dd>#:email #</dd>" +
          "<dt>Date Invited:</dt>" +
          "<dd>#:dateInvited #</dd>" +
          "<dt>Invite Expires </dt>" +
          "<dd>#:inviteExpires# </dd>" +
          "</div>"

        }
      ]
    }

    activate();

    function activate() {

      $scope.mainGridOptions = {
        dataSource: {
          type: "odata",
          transport: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
          },
          pageSize: 15,
          serverPaging: true,
          serverSorting: true
        },
        height: 350,
        change: onChange,
        sortable: true,
        pageable: true,
        dataBound: function () {
          this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns: [{
          field: "FirstName",
          title: "First Name",
          width: "120px"
        }, {
          field: "LastName",
          title: "Last Name",
          width: "120px"
        }, {
          field: "Country",
          width: "120px"
        }, {
          field: "City",
          width: "120px"
        }, {
          field: "Title"
        }]
      };
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
