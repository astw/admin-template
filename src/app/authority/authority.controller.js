(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('AuthorityController', AuthorityController);

  /** @ngInject */
  function AuthorityController($timeout, $scope, $state) {
    var vm = this;
      
      
    vm.showProfile = false;  
      
    vm.searchChanged = searchChanged;
    vm.viewProfile = viewProfile;
    vm.registrationPendingApproval = registrationPendingApproval;
      
      
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
    }
 
      
    var data =  [
              {
                salutation:'Mr.',
                firstName: "Eric",
                lastName: "Snell",
                phone:"(772)-496-4160",
                email:"eric@linkoweb.com", 
                industry:"Vally City Plating (0040)",
                registeredDate:"8/1/2016/ 13:50 AM",
                mailingAddress:'1050 West Pender St.',
                suite:"710",
                city:"Vancouver",
                state:'BC',
                zipCode:'3H5 V1Q',
                isReRegistration:"No",
                requestUserName:'Chris'
              },
              {
                salutation:'Mis',
                firstName: "Shirley",
                lastName: "DEF",
                phone:"(770)-496-5160",
                email:"aaa@defcd.com",
                industry:"WaterTrax Plant (0050)",
                registeredDate:"8/1/2016/ 13:50 AM",
                mailingAddress:'1050 West Pender St.',
                suite:"710",
                city:"Vancouver",
                state:'BC',
                zipCode:'3H5 V1Q',
                  isReRegistration:"No",
                requestUserName:'Chris'
              },
              {
                salutation:'Mr',
                firstName: "ABC",
                lastName: "DEF",
                phone:"(604)-496-7160",
                email:"aaa@defcd.com",
                industry:"Linkco Technology (0060)",
                registeredDate:"8/1/2016/ 13:50 AM", 
                mailingAddress:'1050 West Pender St.',
                suite:"710",
                city:"Vancouver",
                state:'BC',
                zipCode:'3H5 V1Q',
                isReRegistration:"Yes",
                requestUserName:'Chris'
              } 
          
      ]
      
    vm.data = data; 
      
    $scope.mainGridOptions_2 = {
        dataSource :{ 
            data:data 
        },
        
        change: onChange,
        selectable: "row",

        sortable: true,
        columns: [
          {
            field: "firstName",
            title: "First Name",
            minScreenWidth: 750
          },
          {   
              field: "lastName",
              title: "Last Name",
              minScreenWidth: 750
          },
          {   
              field: "phone",
              title: "Phone",
              minScreenWidth: 970
          },
          {   
              field: "email",
              title: "Email",
              minScreenWidth: 970
          }
          ,
          {   
              field: "industry",
              title: "Industry",
               minScreenWidth: 1170
          }, 
            
          {   
              field: "registeredDate",
              title: "Data Registered",
              minScreenWidth: 1170
          },          
          {   
              field: "isReRegistration",
              title: "Is Re-registration ?",
               minScreenWidth: 1170
          },
            
           {   
              headerAttributes : {
                "class" : "hidden-md hidden-lg visible-xs"
            },
            title: "Registration Information",
            //headerTemplate:'<label class="visible-sm"> Industry Information </label>',
            template:  
                    "<div class='visible-xs'>" +
                                    "<dt>First Name </dt>" +
                                    "<dd>#:firstName #</dd>" +
                                    "<dt>Last Name </tdtd>" +
                                    "<dd>#:lastName #</dd>" +
              
                                    "<dt>Phone</dt>" +
                                    "<dd>#:phone #</dd>" +
              
                                    "<dt>email: </dt>" +
                                    "<dd>#:email#</dd>" +
                                    "<dt>Industry: </dt>" +
                                    "<dd>#:industry#</dd>" +
                                    "<dt>Data Registered: </dt>" +
                                    "<dd>#:registeredDate#</dd>" +
                       "</div>" 
              
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
