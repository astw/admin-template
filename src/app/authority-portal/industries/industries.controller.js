(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('IndustriesController', IndustriesController);

  /** @ngInject */
  function IndustriesController($timeout,$rootScope, $scope, $state) {
    var vm = this;

    vm.searchButtonText="Simple Search";
    vm.enabledButtonText = 'Disable';
    vm.simpleSearch = true;
    vm.industryUsers = getIndustyUsers;
    vm.changeIndustryStatus = changeIndustryStatus;
    vm.searchChanged = searchChanged;
    vm.toggleSearchMode = toggleSearchMode;
    vm.searchButtonText = 'Advanced Search';
    vm.searchButtonText2 = 'AS';


    function onChange(arg)
    {
        var selected = $.map(this.select(), function(item) {

            return $(item).text();

        });


        vm.selectedRow = this.dataItem(this.select());
        vm.selectedOne = true;

      $rootScope.selectedIndustry = vm.selectedRow;
      var disabled = this.dataItem(this.select()).enabled;

        if(disabled == 'Yes'){
            vm.enabledButtonText = 'Disable';
        } else {
            vm.enabledButtonText = 'Enable'
        }

        $scope.$digest();

       $state.go('authority.portal.industry-details');

       console.log("Selected: " + selected.length + " item(s), [" + selected.join(", ") + "]");
       console.log('vm.disableButton=' + vm.selectedOne);
    }


    var data =  [
              {
                permitNo: "0040",
                industry: "Valley City Plating",
                address:"100 E. 26th Street Grand Rapids MI 49508",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:2
              },
        {
                permitNo: "8296",
                industry: "Kerry Sweet Ingredients",
                address:"4444 52nd St. SE. Kentwood MI 49512",
                enabled:"Yes",
                hasSignatory:"Yes",
                assignTo:"BF",
                lastSubmission:"",
                activeDataEntryForTemplates:0
              },

        {
                permitNo: "0032",
                industry: "Lacks Enterprises (Plastic Plate)",
                address:"1648 Monroe Ave., N.W.Grand Rapids, MI 49505",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:0
              },
         {
                permitNo: "0469",
                industry: "Lacks Enterprises (Plastic Plate)",
                address:"4375 52nd St. SE Kentwood, MI 49512",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:0
              },
         {
                permitNo: "0062",
                industry: "Access Business Group L.L.C.",
                address:"7575 Fulton, E. Ada, MI 49355",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"BF",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
          {
                permitNo: "0711",
                industry: "Lacks Industries, Inc.  (0711)",
                address:"4090 Barden S.E. Kentwood, MI 49512",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
           {
                permitNo: "8296",
                industry: "Kerry Sweet Ingredients",
                address:"4444 52nd St. SE Kentwood, MI 49512",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"BF",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
         {
                permitNo: "0718",
                industry: "Advance Plating and Finishing",
                address:"840 Cottage Grove St. SE Grand Rapids MI 49507",
                enabled:"Yes",
                hasSignatory:"No",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
         {
                permitNo: "0762",
                industry: "Coatings Plus, Inc.",
                address:"675 Chestnut St. SW Grand Rapids MI 49503",
                enabled:"Yes",
                hasSignatory:"Yes",
                assignTo:"BF",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
        {
                permitNo: "0764",
                industry: "Lacks Enterprises (Paint West)",
                address:"4245 52nd St. Kentwood, MI 49512",
                enabled:"Yes",
                hasSignatory:"Yes",
                assignTo:"KA",
                lastSubmission:"",
                activeDataEntryForTemplates:0
          },
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
              width:'20%',
              field: "industry",
              title: "Industry",
              minScreenWidth: 960,
          },
          {
              width:'25%',
              field: "address",
              //width:450,
              title: "Address",
              minScreenWidth: 960,
          },
          {
              width:'13%',
              field: "enabled",
              //  width:150,
              title: "Enabled?",
              minScreenWidth: 960,
              filterable:{
                  ui:enabledFilter
              }
          },
          {
              width:'13%',
              field: "hasSignatory",
              title: "Has Signatory?",
              minScreenWidth: 1000,
          },
          {
              width:'13%',
              field: "assignTo",
              title: "Assigned To",
              minScreenWidth: 1000,
          },


         {
              width:'5%',
              template:
                    "<div class='fa  fa-chevron-circle-right fa-2x'>" +  "</div>"

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

    function toggleSearchMode(){ 

        if(vm.searchButtonText == 'Advanced Search'){
           console.log('change to simple search');
           vm.simpleSearch = false;
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
            vm.simpleSearch = true;
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
        $state.go('authority.portal.indusry-users', {permitNo:vm.selectedRow.permitNo});
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
