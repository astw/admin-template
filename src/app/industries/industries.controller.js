(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('IndustriesController', IndustriesController);

  /** @ngInject */
  function IndustriesController($timeout, $scope, $state) {
    var vm = this;
  
    vm.enabledButtonText = 'Disable';
      
    vm.industryUsers = getIndustyUsers;
    vm.changeIndustryStatus = changeIndustryStatus;
    
    vm.selectedOne = false;
      
    function onChange(arg)
    {
        var selected = $.map(this.select(), function(item) {
        
            return $(item).text();
             
        });  
        
        vm.selectedRow = this.dataItem(this.select()); 
        vm.selectedOne = true; 
        
        var disabled = this.dataItem(this.select()).enabled;  
        
        if(disabled == 'Yes'){
            vm.enabledButtonText = 'Disable';
        } else {
            vm.enabledButtonText = 'Enable'
        } 
        
        $scope.$digest();
        
       console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
       console.log('vm.disableButton=' + vm.selectedOne);
    }
 
      
    var data =  [
              {
                permitNo: "0040",
                industry: "Valley City Plating",
                address:"100 E 26E Street Grand Rapids Mi 49508",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"",
                lastSubmission:""
              },
        {
                permitNo: "0050",
                industry: "WaterTrax plant",
                address:"1050 West Pender Vancouver ",
                enabled:"No",
                hasSignatory:"No",
                assignTo:"",
                lastSubmission:""
              },
        
        {
                permitNo: "0060",
                industry: "Linkco Plating",
                address:"100 E 26E Street Grand Rapids Mi 49508",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"",
                lastSubmission:""
              } 
          
      ]
      
    $scope.mainGridOptions_2 = {
        dataSource :{ 
            data:data 
        },
        
        change: onChange,
        selectable: "row",
        sortable: true,
        columns: [
          {
            field: "permitNo",
            title: "Permit No."
          },
          {   
              field: "industry",
              title: "Industry",
          },
          {   
              field: "address",
              width:550,
              title: "Address",
          },
          {   
              field: "enabled",
               width:150,
              title: "Enabled?",
          },
          {   
              field: "hasSignatory",
               width:150,
              title: "Has Signatory?",
          },
          {   
              field: "assignTo",
               width:150,
              title: "Assign To",
          },           
          {   
              field: "lastSubmission",
               width:150,
              title: "Last Submission",
          }
        ] 
    }

     
    activate();

    function activate() { 
        console.log('vm.selectedOne=' + vm.selectedOne);
    } 
      
    function changeIndustryStatus(){ 
        
        swal(
            {   
                title: "Are you sure?",   
                text: "You will change the industry status!",   
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
                    
                    vm.selectedRow.enabled = vm.selectedRow.enabled =='Yes' ?  'No' : 'Yes';
                    $scope.$digest();
                    
                    swal("Changed!", "Industry status has been changed.", "success");  
                } else {
                    swal("Cancelled", "Industry status is not changed.", "error");   
                } 
            }
        );  
    }
      
    function getIndustyUsers(){ 
        $state.go('users', {permitNo:vm.selectedRow.permitNo});
    }      
  }
})();
