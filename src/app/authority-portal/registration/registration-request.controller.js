(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('RegistrationrequestsController', RegistrationrequestsController);

  /** @ngInject */
  function RegistrationrequestsController($timeout, $scope, $state) {
    var vm = this;
      
      console.log($rootScope.selectedIndustry);
      
    vm.showProfile = false;  
      
    vm.searchChanged = searchChanged;
    vm.viewProfile = viewProfile;
    vm.registrationPendingApproval = registrationPendingApproval;
      
      
    vm.selectedOne = false;
    
    
     
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
      
    function viewProfile(){
       vm.showProfile = true;
       vm.currentUser =vm.selectedRow;
    }
    
    function registrationPendingApproval(){
          vm.showProfile = false;
    }
      
    function getIndustyUsers(){ 
        $state.go('users', {permitNo:vm.selectedRow.permitNo});
    }
      
    function searchChanged(){
        console.log('input =' +  vm.searchKey);
        
        var data = vm.data;   
        var filterData = industryFilter(data, vm.searchKey);  
        
        vm.grid.setDataSource(new kendo.data.DataSource({ data:filterData })); 
        vm.grid.refresh();
    }
      
    function industryFilter(dataSet, inputKey){
        
        var output=[];
        
        console.log('===== dataset ');
        console.log(dataSet);
        
        angular.forEach(dataSet,function(item){
            if( item.firstName.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 
               ||  item.lastName.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 
               ||  item.phone.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 
               || item.industry.toLowerCase().indexOf(inputKey.toLowerCase()) > -1) 
                output.push(item); 
        })
        
        return output; 
    }
  }
})();
