/**
 * Created by swang on 8/26/2016.
 */
(function() {
    'use strict';

    angular
        .module('testProject')
        .controller('IndustryAccountController', IndustryAccountController);

    /** @ngInject */
    function IndustryAccountController($timeout, $scope, $state, userService) {
        var vm = this;

 var data = [
                        {
                            "templateName": "Daily Metal Samples Reported Weekly",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1,
                            "description" :"Daily Sample Reported Weekly"
                        },
                        {
                            "templateName": "Monthly Samples",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 0,
                            "description" :"Monthly Sampling"
                        },
                         {
                            "templateName": "Monthly Flows",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 0,
                            "description" :"Monthly Flow Reported SemiAnnually"
                        },
                        
                        
        ]

        vm.data = data;

        $scope.mainGridOptions_deft = {
            dataSource: {
                data: data
            },
            filterable: {
                mode: "menu",
                extra: false
            },
            resizable: true,
            // change: onChange,
            selectable: "row",
            pageable: {
                pageSizes: true,
                pageSize: 5,
                numeric: false,
                input: true
            },
            sortable: true,
            columns: [
              {
                  field: "templateName",
                  title: "Data Entry Form Templates",
                  width:"50%"
              } 
             ,
              {
                  field: "description",
                  title: "Description",
                  width:"50%"
                   
              } 
            ]
        }



var dataEntryFormList = [
                        {
                            "dataEntryFormName": "Daily Metal Samples Reported Weekly",
                            "collectionDataRange": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "lastModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "submissionStatus": "Draft",
                            "templateStatus": "Active",
                            "drafts": 1,
                            "description" :"Daily Sample Reported Weekly"
                        },
                        {
                            "dataEntryFormName": "Monthly Samples",
                            "collectionDataRange": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "lastModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "submissionStatus": "Draft",
                            "templateStatus": "Active",
                            "drafts": 0,
                            "description" :"Monthly Sampling"
                        } 
                        
                        
        ]

$scope.mainGridOptions_deft_list = {
            dataSource: {
                data: dataEntryFormList
            },
            filterable: {
                mode: "menu",
                extra: false
            },
            resizable: true,
            // change: onChange,
            selectable: "row",
            pageable: {
                pageSizes: true,
                pageSize: 5,
                numeric: false,
                input: true
            },
            sortable: true,
            columns: [
              {
                  field: "dataEntryFormName",
                  title: "Data Entry Form",
                  width:"20%"
              } 
             ,
              {
                  field: "collectionDataRange",
                  title: "Collection Data Range",
                  width:"15%" ,
                   format: "{0:MM-dd-yyyy}"
              } 
              ,
              {
                  field: "lastModified",
                  title: "last Modified",
                  width:"15%" ,
                   format: "{0:MM-dd-yyyy}"
              } ,
              {
                  field: "by",
                  title: "by",
                  width:"10%" 
              } ,
              {
                  field: "submissionStatus",
                  title: "Submission Status",
                  width:"10%" 
              } 
            ]
        }



    }
})();
