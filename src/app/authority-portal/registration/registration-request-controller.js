(function() {
    'use strict';

    angular
        .module('testProject')
        .controller('RegistrationrequestsController', RegistrationrequestsController);

    /** @ngInject */
    function RegistrationrequestsController($log, industryService, questionService, $rootScope, $scope, $state) {
        var vm = this;

        $log.info("RegistrationrequestsController");

        console.log($rootScope.selectedIndustry);

        vm.showProfile = false;

        vm.viewProfile = viewProfile;
        vm.registrationPendingApproval = registrationPendingApproval;

        vm.selectedOne = false;

        activate();

        function activate() {
            console.log('in active vm.selectedOne=' + vm.selectedOne);
        }

        function changeIndustryStatus() {

            swal({
                    title: "Are you sure?",
                    text: "You will change the industry status!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#3c8dbc',
                    confirmButtonText: "Yes, change it!",
                    cancelButtonText: "No, cancel!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        // change data

                        vm.selectedRow.enabled = vm.selectedRow.enabled == 'Yes' ? 'No' : 'Yes';
                        $scope.$digest();

                        swal("Changed!", "Industry status has been changed.", "success");
                    } else {
                        swal("Cancelled", "Industry status is not changed.", "error");
                    }
                }
            );
        }

        function viewProfile() {
            vm.showProfile = true;
            vm.currentUser = vm.selectedRow;
        }

        function registrationPendingApproval() {
            vm.showProfile = false;
        }

        function getIndustyUsers() {
            $state.go('users', {
                permitNo: vm.selectedRow.permitNo
            });
        }

        function industryFilter(dataSet, inputKey) {

            var output = [];

            console.log('===== dataset ');
            console.log(dataSet);

            angular.forEach(dataSet, function(item) {
                if (item.firstName.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 ||
                    item.lastName.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 ||
                    item.phone.toLowerCase().indexOf(inputKey.toLowerCase()) > -1 ||
                    item.industry.toLowerCase().indexOf(inputKey.toLowerCase()) > -1)
                    output.push(item);
            })

            return output;
        }

        vm.data = industryService.getPendingApprovalUsers();

        $log.info(vm.data);

        $scope.kbqQuestions = {
          model:vm.data.kbqQuestion1,
          availableOptions: questionService.getAllKBQUestions()
        };


        $scope.secureQuestions = {
          model: null,
          availableOptions: questionService.getAllSecurityQuestions()
        };


      $scope.mainGridOptions_2 = {
            dataSource: {
                data: vm.data
            },
            filterable: true,
            selectable: "row",
            change :onChange,
            sortable: true,

            columns: [

                {
                    width: '10%',
                    field: "firstName",
                    title: "First Name",
                    minScreenWidth: 960
                },

                {
                    width: '10%',
                    field: "lastName",
                    title: "Last Name",
                    minScreenWidth: 960
                }, {
                    width: '20%',
                    field: "email",
                    title: "Email",
                    minScreenWidth: 960
                },

                {
                    width: '20%',
                    field: "organization",
                    title: "Industry #",
                    minScreenWidth: 960
                },

                {
                    width: '20%',
                    field: "registeredDate",
                    title: "Date Registered",
                    minScreenWidth: 960
                }, {
                    width: '5%',
                    template: "<div class='fa  fa-chevron-circle-right fa-lg'>" + "</div>"
                }
            ]
        };

      function onChange(arg) {
        console.log("in on change ");
        var selected = $.map(this.select(), function (item) {
          return $(item).text();
        });

        if (selected == null) return;

        vm.selectedRow = this.dataItem(this.select());

        $rootScope.registrationPendingUser = vm.selectedRow;
console.log('==== user email=' + vm.selectedRow.email);
        $rootScope.registrationPendingUser = industryService.getPendingApprovalUserDetail(vm.selectedRow.email);


        $log.info("selected user details:" , $rootScope.registrationPendingUser );
        if($rootScope.user.userType == 'AuthorityUser')
          $state.go('authority.portal.pending-approval-user-details');
        else
          $state.go('industry.pending-approval-user-details');
      }

    }
})();
