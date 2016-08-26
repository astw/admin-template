(function () {
    'use strict';

    angular
      .module('testProject')
      .controller('IndustrydetailsController', IndustrydetailsController);

    /** @ngInject */
    function IndustrydetailsController($timeout, $rootScope, $scope, $state) {
        var vm = this;

        if ($rootScope.selectedIndustry.enabled == "Yes") {
            vm.enabledButtonText = 'Disable';
        } else {
            vm.enabledButtonText = 'Enabled';
        }

        vm.industryUsers = getIndustyUsers;
        vm.changeIndustryStatus = changeIndustryStatus;

        function changeIndustryStatus() {
            swal(
                {
                    title: "Are you sure?",
                    text: "You will change the industry status!",
                    //type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#428bca",
                    confirmButtonText: "Yes, change it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function (isConfirm) {
                    if (isConfirm) {
                        // change data

                        $rootScope.selectedIndustry.enabled = $rootScope.selectedIndustry.enabled == 'Yes' ? 'No' : 'Yes';
                        if ($rootScope.selectedIndustry.enabled == "Yes") {
                            vm.enabledButtonText = 'Disable';
                        } else {
                            vm.enabledButtonText = 'Enabled';
                        }
                        $scope.$digest();

                        swal(
                        {
                         title:"Changed!",
                         text:"Industry status has been changed.",
                         type:"success"
                        });

                    } else {
                        swal("Canceled", "Industry status is not changed.", "error");
                    }
                }
            );
        }

        function getIndustyUsers() {
            $state.go('authority.portal.industryUsers', { permitNo: $rootScope.selectedIndustry.permitNo });
        }

        var data = [
                        {
                            "templateName": "Monthly Surcharge Sample",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1
                        },
                        {
                            "templateName": "Monthly Flows",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 0
                        },
                        {
                            "templateName": "Weekly Metal Samples",
                            "effective": kendo.parseDate("06/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("03/21/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1
                        },
                        {
                            "templateName": "Weekly Metal Samples",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": kendo.parseDate("05/30/2016"),
                            "createdOrModified": kendo.parseDate("03/21/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1
                        },
                        {
                            "templateName": "Ad-Hoc Sampling",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1
                        },
                        {
                            "templateName": "Monthly Metal Samples",
                            "effective": kendo.parseDate("01/01/2016"),
                            "retired": "",
                            "createdOrModified": kendo.parseDate("01/01/2016"),
                            "by": "Jone Smith",
                            "comments": "",
                            "templateStatus": "Active",
                            "drafts": 1
                        }
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
            change: onChange,
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
                  title: "Template Name",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-2"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-2"
                  }
              },
              {
                  field: "effective",
                  title: "Effective",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  format: "{0:MM-dd-yyyy}"
              },
              {
                  field: "retired",
                  title: "Retired",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  format: "{0:MM-dd-yyyy}"

              },
              {
                  field: "createdOrModified",
                  title: "Created / Modified",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-2"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-2"
                  },
                  format: "{0:MM-dd-yyyy}"
              },
              {
                  field: "by",
                  title: "By",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-1"
                  }
              },
              {
                  field: "comments",
                  title: "Comments",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-3"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-3"
                  }
              },
              {
                  field: "templateStatus",
                  title: "Status",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-1"
                  }
              },
              {
                  field: "drafts",
                  title: "Drafts",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-1"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-1"
                  }
              },
              {
                  template: "<div class='fa fa-chevron-circle-right fa-lg pull-right'>" + "</div>",
                  width: 60,
                  filterable: false

              }
            ]
        }

        function onChange(arg) {
            //var selected = $.map(this.select(), function (item) {
            //    return $(item).text();
            //});

            //vm.selectedRow = this.dataItem(this.select());
            //vm.selectedOne = true;

            //$rootScope.selectedDEFT = vm.selectedRow;

            //$state.go('authority.portal.industry-DEFT');
        }

        vm.newDEFT = newDEFT;
        function newDEFT() {
            $state.go('authority.portal.industry-DEFT', { permitNo: $rootScope.selectedIndustry.permitNo });
        }
    }
})();
