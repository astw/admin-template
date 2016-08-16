(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope,$stateParams, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1471276328751; 
    vm.testMessage = "this is a test message";
  
    vm.lockButtonText = 'Unlock';
    vm.enabledButtonText = 'Disable';
    
    vm.changeUserActiveStatus =  changeUserActiveStatus;
    vm.changeUserLockStatus =  changeUserLockStatus;
    vm.removeUser = removeUser;
      
    console.log($stateParams.selectedRow);
      
   var permitNo = $stateParams.permitNo; 


  if(permitNo == '0040')
   {
       vm.industryText = "Valley City Plating"; 
   } 
   else if (permitNo == '0050')  
   {
        vm.industryText = "WaterTrax plant";
   } 
   else if (permitNo == '0060') 
   {
      vm.industryText = "Linkco Plating";
   } 
      
    function onChange(arg)
    {
        var selected = $.map(this.select(), function(item) {
        
            return $(item).text();
             
        }); 

        vm.selectedRow = this.dataItem(this.select()); 
        
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
         
        
        $scope.$digest();
        
       console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
    }
      
    var data =  {
            "items" :[
              {
                "firstName": "Eric",
                "lastName": "Snell",
                "phone":"(772)-496-4160",
                  "email":"eric@linkoweb.com",
                  "registeredDate":"8/1/2016/ 13:50 AM",
                  "status":"Active",
                  "locked":"No"
              },
              {
                "firstName": "Chris",
                "lastName": "Weinandt",
                "phone":"(770)-496-4160",
                  "email":"Weinandt@linkcotechnology.com",
                  "registeredDate":"8/1/2016/ 13:50 AM",
                  "status":"Active",
                  "locked":"No"
              }
            ]
          };
      
      
    var data2 =  [
              {
                firstName: "Eric",
                lastName: "Snell",
                phone:"(772)-496-4160",
                email:"eric@linkoweb.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"InActive",
                locked:"Locked"
              },
              {
                firstName: "Chris",
                lastName: "Weinandt",
                phone:"(770)-496-4160",
                email:"Weinandt@linkcotechnology.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"Active",
                locked:"Locked"
              },
              {
                firstName: "Eric",
                lastName: "Snell",
                phone:"(772)-496-4160",
                email:"eric@linkoweb.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"InActive",
                locked:"No"
              },
              {
                firstName: "Chris",
                lastName: "Weinandt",
                phone:"(770)-496-4160",
                email:"Weinandt@linkcotechnology.com",
                registeredDate:"8/1/2016/ 13:50 AM",
                status:"Active",
                locked:"No"
              }
          
      ]
      
    vm.data = data2;  
    $scope.mainGridOptions_2 = {
        dataSource :{ 
            data:vm.data 
            
     //        data:  data,
     //      schema: {
     //       data: "items"
     //      }
        },
        
        change: onChange,
        selectable: "row",
        sortable: true,
        columns: [
          {
            field: "firstName",
            title: "First Name"
          },
          {   
              field: "lastName",
              title: "Last Name",
          },
          {   
              field: "phone",
              title: "Phone",
          },
          {   
              field: "email",
              title: "Email",
          },
          {   
              field: "registeredDate",
              title: "Data Registered",
          },
          {   
              field: "status",
              title: "Status",
          },           
          {   
              field: "locked",
              title: "AccountLocked?",
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
                    // change data 
                    
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
                    // change data 
                    
                    delete vm.selectedRow;
                    delete vm.data[0];
                    
                     delete $scope.mainGridOptions_2.dataSource.data;
                    
                    $scope.$digest();
                    
                    swal("Changed!", "User lock status has been changed.", "success");  
                } else {
                    swal("Cancelled", "User lock status is not changed.", "error");   
                } 
            }
        );   
    }
      
  }
})();
