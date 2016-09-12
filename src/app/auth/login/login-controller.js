(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $rootScope, $localStorage, $scope,$stateParams, $state) {

    var vm = this;
    activate();

    $scope.selectedAuthority= "1"
    $scope.selectedIndustry = "1";

    $scope.goAuthority = function () {
      $state.go('authority.portal.industries');
    };

    $scope.goIndustry = function() {
      //  /industry/
      if ($scope.selectedIndustry === "1") {
        $rootScope.industryName = 'Valley City Plating';
        $rootScope.industryPermitNo = "0040";
      }
      else{
        $rootScope.industryName = "Kerry Sweet Ingredients";
        $rootScope.industryPermitNo = "8296";
      }

      $state.go('industry.portal')

    };

    vm.login = login;
    //vm.logout = logout;
    $scope.step = 1;
    vm.nextStep = nextStep;

$scope.onClick = function(){

  alert( $scope.selectedIndustry);


}

    function activate() {
    }


    function login(){

        if(vm.userEmail == 'aa'  && vm.userPassword == "aa1234"){

            var user = {
                email:'Weinandt@linkotechnology.com',
                userName : "Chris Weinandt",
                userType : "AuthorityUser",
                userPermission : "",
                role:"Administrator",
                signatory :"No"
            };
            $rootScope.user = user;
            $localStorage["user"] = user;

            //$state.go('authority.portal.industries');
        }

        else if(vm.userEmail == 'bb'  && vm.userPassword == "bb1234"){

            var user = {
                email:'swang@linkotechnology.com',
                userName : "Shuhao Wang",
                industryId:"0040",
                userType : "IndustryUser",
                userPermission : "",
                role:"Administrator",
                signatory :"Yes"
            };
            $rootScope.user = user;
            $localStorage["user"] = user;

            //todo:got to industry portal
            //$state.go('industry.portal');

          $state.go('plain.portal-director');
        }

    }


    function nextStep (){
        if($scope.step == 1) {
                recoverPasswordStep1();
            }
        else if($scope.step ==2){
            verifyQuestion();
        }

    }


    function recoverPasswordStep1(){
        console.log("in recoverPasswordStep1  ");
        $scope.step = 2;
        $scope.questionText = "What's your pet's name ?"
        $scope.questionAnswer = "Mark"
    }

    function verifyQuestion(){

        console.log("in verifyQuestion  ");


        if(vm.userQuestionAnswer == "mark" ||
           vm.userQuestionAnswer == "Mark"
          )
        $scope.step = 3;
    }

  }
})();
