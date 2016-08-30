(function () {
    'use strict';

    angular
      .module('testProject')
      .controller('IndustryDEFTController', IndustryDEFTController);

    /** @ngInject */
    function IndustryDEFTController($timeout, $rootScope, $scope, $state) {
        var vm = this;
        $rootScope.$state = $state;

        $scope.step = 1;

        $scope.saveDeft = function(){
            $state.go('authority.portal.industry-details', { industryNo: $rootScope.selectedIndustry.permitNo });
        }

        function getIndustyUsers() {
            $state.go('authority.portal.industryUsers', { permitNo: $rootScope.selectedIndustry.permitNo });
        }

        var dataSP = [
                        {
                            "selected": false,
                            "abbrv": "001",
                            "description": "End of pipe at N.W. Corner of Shop"
                        },
                        {
                            "selected": false,
                            "abbrv": "002",
                            "description": "Metal finishing process"
                        },
                        {
                            "selected": false,
                            "abbrv": "003",
                            "description": "End of pipe at MCD Corner of Shop"
                        },
                        {
                            "selected": false,
                            "abbrv": "011",
                            "description": "Start of pipe at N.W. Corner of Shop"
                        },
                        {
                            "selected": false,
                            "abbrv": "033",
                            "description": "Start of pipe at MCD Corner of Shop"
                        }
        ]

        vm.dataSP = dataSP;

        $scope.mainGridOptions_sp = {
            dataSource: {
                data: dataSP
            },
            resizable: true,
            selectable: "row",
            height: 400,
            pageable: {
                pageSizes: true,
                pageSize: 10,
                numeric: false,
                input: true
            },
                       dataBound: function() {
                                            this.expandRow(this.tbody.find("tr.k-master-row").first());
                                           // $scope.gridSP.select("tr:eq(1)");
                         },
            sortable: true,
            columns: [
              {
                  template: '<input type="checkbox" #= selected ? \'checked="checked"\' : "" # class="chkbx" />',
                  width: 110
              },
              {
                  field: "abbrv",
                  title: "Abbrv",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-3"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-3"
                  }
              },
              {
                  field: "description",
                  title: "Description",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-8"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-8"
                  }
              }
            ]
        }

        $("#gridSP .k-grid-content").on("change", "input.chkbx", function (e) {
            var grid = $("#gridSP").data("kendoGrid"),
                dataItem = grid.dataItem($(e.target).closest("tr"));

            dataItem.set("selected", this.checked);
        });

        //--------------------------------------------------------------------------------------------------------------------------------


        var dataSP2 = [
                        {
                            "abbrv": "001",
                            "description": "End of pipe at N.W. Corner of Shop"
                        },
                        {
                            "abbrv": "002",
                            "description": "Metal finishing process"
                        },
                        {
                            "abbrv": "003",
                            "description": "End of pipe at MCD Corner of Shop"
                        }
        ]

        vm.dataSP = dataSP2;

        $scope.mainGridOptions_sp2 = {
            dataSource: {
                data: dataSP2
            },
            resizable: true,
            selectable: "row",
            height: 350,
            sortable: true,
            toolbar: ["create"],

           dataBound: function() {
                            //    this.expandRow(this.tbody.find("tr.k-master-row").first());
                            //    $scope.gridSelectedSP.select("tr:eq(0)");
                            this.select("tr:eq(1)");
             },
            messages: {
                commands: {
                    create: "Add Sampling Point"
                },
            },
            columns: [
              {
                  field: "abbrv",
                  title: "Abbrv",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-3"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-3"
                  }
              },
              {
                  field: "description",
                  title: "Description",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-8"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-8"
                  }
              },
              {
                  template: '<div class="form-group pull-right"><button type="button" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-minus-sign"></span> </button>'
                            + '&nbsp;&nbsp;<button type="button" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-duplicate"></span> </button></div>',
                  width: 150
              }
            ]
        }
         //$scope.gridSP.select("tr:eq(1)");

        //var gridSelectedSP = $("#gridSelectedSP").data("kendoGrid"),
        //                    rowSP = gridSelectedSP.tbody.find(">tr:not(.k-grouping-row)").eq(1);

        //gridSelectedSP.select(rowSP);

        //--------------------------------------------------------------------------------------------------------------------------------

        var dataAP = [
                        {
                            "parameter": "Lead",
                            "unit": "mg/L"
                        },
                        {
                            "parameter": "Selenium",
                            "unit": "mg/L"
                        },
                        {
                            "parameter": "Silver",
                            "unit": "mg/L"
                        }
                    ]

        vm.dataAP = dataAP;

        $scope.mainGridOptions_ap = {
            dataSource: {
                data: dataAP
            },
            resizable: true,
            height: 350,
                       dataBound: function() {
                                            this.expandRow(this.tbody.find("tr.k-master-row").first());
                                           // $scope.gridSP.select("tr:eq(1)");
                         },
            sortable: true,
            /*filterable: {
                mode: "row",
                extra: false
            },
            */
            columns: [
              {
                  field: "parameter",
                  title: "Parameter",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-6"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-6"
                  },
                  filterable: {
                      cell: {
                          showOperators: false,
                          operator: "contains",
                          suggestionOperator: "contains"
                      }
                  }
              },
              {
                  field: "unit",
                  title: "Unit",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-5"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-5"
                  },
                  filterable: {
                      cell: {
                          showOperators: false,
                          operator: "contains",
                          suggestionOperator: "contains"
                      }
                  }
              },
              {
                  template: '<div class="form-group pull-right"><button type="button" class="btn btn-success btn-sm"> <span class="glyphicon glyphicon-plus-sign"></span> </button></div>',
                  width: 60
              }
            ]
        }

        //$("#gridSP .k-grid-content").on("change", "input.chkbx", function (e) {
        //    var grid = $("#gridSP").data("kendoGrid"),
        //        dataItem = grid.dataItem($(e.target).closest("tr"));

        //    dataItem.set("selected", this.checked);
        //});


        //--------------------------------------------------------------------------------------------------------------------------------

        var dataSelectedParam = [
                        {
                            "selected": false,
                            "parameter": "Nickel",
                            "unit": "mg/L",
                            "collectionMethod":"Grab"
                        },
                        {
                            "selected": false,
                            "parameter": "Copper",
                            "unit": "mg/L",
                            "collectionMethod": "Comp"
                        }
                    ]

        vm.dataSelectedP = dataSelectedParam;

        $scope.mainGridOptions_selectedParam = {
            dataSource: {
                data: dataSelectedParam
            },
            resizable: true,
            height: 350,
            sortable: true,
            dataBound: function() {
                                            this.expandRow(this.tbody.find("tr.k-master-row").first());
                                            //$scope.gridSP.select("tr:eq(1)");
                         },
            columns: [
              {
                  field: "parameter",
                  title: "Parameter",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-4"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-4"
                  }
              },
              {
                  field: "unit",
                  title: "Unit",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-3"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-3"
                  }
              },
              {
                  field: "collectionMethod",
                  title: "Default Collection Method",
                  headerAttributes: {
                      "class": "visible-md visible-lg col-md-3"
                  },
                  attributes: {
                      "class": "visible-md visible-lg col-md-3"
                  }
              },
              {
                  title: "Calculate Loading?",
                  template: '<input type="checkbox" #= selected ? \'checked="checked"\' : "" # class="chkbx" />',
                  width: 140
              },
              {
                  template: '<div class="form-group pull-right"><button type="button" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-minus-sign"></span> </button></div>',
                  width: 60
              }
            ]
        }

        $("#gridSelectedParam .k-grid-content").on("change", "input.chkbx", function (e) {
            var grid = $("#gridSelectedParam").data("kendoGrid"),
                dataItem = grid.dataItem($(e.target).closest("tr"));

            dataItem.set("selected", this.checked);
        });
    }
})();
