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
    vm.searchChanged = searchChanged;
    vm.advancedSearch = advancedSearch;
    vm.searchButtonText = 'Advanced Search'; 
    vm.searchButtonText2 = 'AS'; 
    
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
      
    vm.data = data; 
      
    $scope.mainGridOptions_2 = {
        dataSource :{ 
            data:data 
        },
        filterable:true,
         
        change: onChange,
        selectable: "row",
       
        sortable: true, 
        
        columns: [
             
          {
            width:'10%',
            field: "permitNo",
            title: "Permit No.",
            minScreenWidth: 960,
          },
    
          {   
              width:'30%',
              field: "industry",
              title: "Industry",
              minScreenWidth: 960,
          },
          {   
              width:'40%',
              field: "address",
              //width:450,
              title: "Address",
              minScreenWidth: 960,
          },
          {   
              width:'10%',
              field: "enabled",
              //  width:150,
              title: "Enabled?",
              minScreenWidth: 960,
              filterable:{
                  ui:enabledFilter
              }
          },
          {   
              width:'10%',
              field: "hasSignatory",
//               width:150,
              title: "Has Signatory?",
              minScreenWidth: 1000,
          },
          {   
              width:'30%',
              field: "assignTo",
//               width:150,
              title: "Assign To",
              minScreenWidth: 1000,
          },           
          {   
              width:'30%',
              field: "lastSubmission",
//              width:150,
              title: "Last Submission",
              minScreenWidth: 1200,
          },
            
          {  
            headerAttributes : {
                "class" : "hidden-md hidden-lg visible-sm visible-xs"
            },
            title: "Industry Information",
            //headerTemplate:'<label class="visible-sm"> Industry Information </label>',
            template:  
                    "<div class=' visible-sm visible-xs'>" +
                                   "<dt>Permit No. </dt>" + 
                                   "<dd>#:permitNo #</dd>" +
                                    "<dt>Industry: </dt>" +
                                    "<dd>#:industry#</dd>" +
                                    "<dt>Enabled: </dt>" +
                                    "<dd>#:enabled#</dd>" +
                                    "<dt>Has Signatory: </dt>" +
                                    "<dd>#:hasSignatory#</dd>" +
                                    "<dt>Assigned To: </dt>" +
                                    "<dd>#:assignTo#</dd>" +              
                                    "<dt>Last Submission </dt>"  +
                       "</div>" 
              
          }
        ] 
    }

     
    activate();

    function enabledFilter(){
       
    }
      
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
      
    function advancedSearch(){  
        console.log('in advance search window ');   
         
        if(vm.searchButtonText == 'Advanced Search'){ 
           vm.searchButtonText = 'Simple Search';
           vm.searchButtonText2 = 'SS'; 
           vm.industryGrid.setOptions(
            {
                filterable:{
                    mode:"row"
                }
            }
         ) 
        } else {
            vm.searchButtonText = 'Advanced Search';
            vm.searchButtonText2 = 'AS'; 
            vm.industryGrid.setOptions(
                {
                    filterable: null
                } 
            )
        } 
        
       vm.industryGrid.refresh(); 
    }
      
    function getIndustyUsers(){ 
        $state.go('users', {permitNo:vm.selectedRow.permitNo});
    }
      
    function searchChanged(){
        console.log('input =' +  vm.searchKey);
        
        var data = vm.data;   
        var filterData = industryFilter(data, vm.searchKey);  
        
        vm.industryGrid.setDataSource(new kendo.data.DataSource({ data:filterData })); 
        vm.industryGrid.refresh();
    }
      
    function industryFilter(dataSet, inputKey){
        
        var output=[];
        
        angular.forEach(dataSet,function(item){
            if(item.permitNo.indexOf(inputKey) > -1 ||  item.industry.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 || item.address.toLowerCase().indexOf(inputKey.toLowerCase()) > -1) 
                output.push(item);
            
            console.log('==== item=', item);
        })
        
        return output; 
    }
  }
})();
