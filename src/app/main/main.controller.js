(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('IndustryusersController', IndustryusersController);

  /** @ngInject */
  function IndustryusersController($timeout, $rootScope, $state, $scope,$stateParams, webDevTec, toastr) {
    var vm = this;

    vm.lockButtonText = 'Unlock';
    vm.enabledButtonText = 'Disable';

    vm.changeUserActiveStatus =  changeUserActiveStatus;
    vm.changeUserLockStatus =  changeUserLockStatus;
    vm.removeUser = removeUser;
    vm.inviteUser = inviteUser;

    vm.onchange = onchange;

    console.log($stateParams.selectedRow);

   var permitNo = $stateParams.permitNo;


    function inviteUser(){
       $state.go("authority.portal.inviteiu");
    }

    function onChange(arg)
    {
        vm.grid = arg.sender;

        var selected = $.map(this.select(), function(item) {

            return $(item).text();

        });

        vm.selectedRow = this.dataItem(this.select());
        $rootScope.selectedUser = vm.selectedRow;

        var disabled = vm.selectedRow.status;
        var locked =  vm.selectedRow.locked;

        if(disabled == 'Active'){
            vm.enabledButtonText = 'Disable';
        } else {
            vm.enabledButtonText = 'Enable'
        }

        if(locked == 'Locked'){
            vm.lockButtonText = 'Unlock';
        } else {
            vm.lockButtonText = 'Lock'
        }

       $state.go("authority.portal.industry-user-details",{userId:$rootScope.selectedUser.userId});

        $scope.$digest();

       console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }

    var data =  [
              {
                userId:1,
                firstName: "Eric",
                lastName: "Snell",
                phone:"(772)-496-4160",
                email:"eric@linkoweb.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"InActive",
                locked:"Locked"
              },
              {
              userId:2,
                firstName: "Chris",
                lastName: "Weinandt",
                phone:"(770)-496-4160",
                email:"Weinandt@linkcotechnology.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"Active",
                locked:"Locked"
              },
              {   userId:3,
                firstName: "Eric",
                lastName: "Snell",
                phone:"(772)-496-4160",
                email:"eric@linkoweb.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"InActive",
                locked:"No"
              },
              {   userId:4,
                firstName: "Chris",
                lastName: "Weinandt",
                phone:"(770)-496-4160",
                email:"Weinandt@linkcotechnology.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"Active",
                locked:"No"
              }

      ]

    $scope.users = new kendo.data.DataSource({ data:data });

    vm.data = data;
    $scope.mainGridOptions_2 = {
        dataSource :{
            data:vm.data
        },

        change: onChange,
        selectable: "row",
        sortable: true,
        columns: [
          {
             headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
            width:"12.5%",
            field: "firstName",
            title: "First Name",
            minScreenWidth: 960,
          },
          {
               headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"12.5%",
              field: "lastName",
              title: "Last Name",
               minScreenWidth: 960,
          },
          {
               headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"15%",
              field: "phone",
              title: "Phone",
              minScreenWidth: 960,
          },
          {
               headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"20%",
              field: "email",
              title: "Email",
              minScreenWidth: 960,
          },
          {
               headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"15%",
              field: "registeredDate",
              title: "Data Registered",
              minScreenWidth: 1200,
          },
          {
               headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"10%",
              field: "status",
              title: "Status",
              minScreenWidth: 1200,
          },
          {
              headerAttributes : {
                "class" : "visible-lg visible-sm visible-md"
              },
              width:"10%",
              field: "locked",
              title: "AccountLocked?",
               minScreenWidth: 1200
          },
          {
              width:'5%',
              template:
                    "<div class='fa fa-edit fa-lg'>" +  "</div>"

          },
          {

            headerAttributes : {
                "class" : "hidden-md hidden-lg visible-sm visible-xs"
            },
            title: "User Information",
//             headerTemplate:'<label class="visible-sm visible-xs"> User Information </label>',
            template:
                    "<div class=' visible-sm visible-xs'>" +
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
                                    "<dt>Status </dt>"  +
                                    "<dd>#:status# </dd>" +
                                    "<dt>Locked </dt>"  +
                                    "<dd>#:locked# </dd>" +

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
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                columns: [{
                    field: "FirstName",
                    title: "First Name",
                    width: "120px"
                    },{
                    field: "LastName",
                    title: "Last Name",
                    width: "120px"
                    },{
                    field: "Country",
                    width: "120px"
                    },{
                    field: "City",
                    width: "120px"
                    },{
                    field: "Title"
                }]
            };
    }


    function changeUserActiveStatus(){

        swal(
            {
                title: "Are you sure?",
                text: "You will change user active status!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, change it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function(isConfirm)
            {
                if (isConfirm) {
                    vm.selectedRow.status = vm.selectedRow.status =='Active' ?  'InActive' : 'Active';
                    $scope.$digest();

                    swal("Changed!", "User active status has been changed.", "success");
                } else {
                    swal("Cancelled", "User active status is not changed.", "error");
                }
            }
        );
    }

    function changeUserLockStatus(){

        swal(
            {
                title: "Are you sure?",
                text: "You will change user lock status!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, change it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function(isConfirm)
            {
                if (isConfirm) {
                    // change data

                    vm.selectedRow.status = vm.selectedRow.locked =='Locked' ?  'No' : 'Locked';
                    $scope.$digest();

                    swal("Changed!", "User lock status has been changed.", "success");
                } else {
                    swal("Cancelled", "User lock status is not changed.", "error");
                }
            }
        );
    }

    function removeUser(){

           swal(
            {
                title: "Are you sure?",
                text: "You will remove the user from the industry!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, remove it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: false,
                closeOnCancel: false },
            function(isConfirm)
            {
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
