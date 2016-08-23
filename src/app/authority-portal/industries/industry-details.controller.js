(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('IndustrydetailsController', IndustrydetailsController);

  /** @ngInject */
  function IndustrydetailsController($timeout,$rootScope, $scope, $state) {
    var vm = this;

    vm.enabledButtonText = 'Disable';
    if($rootScope.selectedIndustry.enabled == "Yes"){
      vm.enabledButtonText = 'Disable';
    }  else {
      vm.enabledButtonText = 'enabled';
    }


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

//     $state.go("authority.portal.industries.details");

       $rootScope.selectedIndustry = vm.selectedRow;
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
            width:'11%',
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
              width:'11%',
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
              width:'11%',
              field: "assignTo",
              title: "Assign To",
              minScreenWidth: 1000,
          },
          {
              width:'15%',
              field: "lastSubmission",
              title: "Last Submission",
              minScreenWidth: 1200,
          },

         {
              width:'15%',
              field: "activeDataEntryForTemplates",
              title: "Active Data Entry Form Templates",
//              headerAttributes : {
//                "class" : "visible-lg visible-md"
//              },
//              headerTemplate:'<label class="visible-lg visible-md"> Active Data Entry Form Templates </label>',
              minScreenWidth: 1200,
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
        $state.go('authority.portal.industryUsers',{permitNo:$rootScope.selectedIndustry.permitNo});
    }

    function searchChanged(){
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
