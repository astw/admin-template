(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $rootScope, $localStorage, $scope,$stateParams, $state) {

    var vm = this;
    activate();

    vm.login = login;
    //vm.logout = logout;
    $scope.step = 1;
    vm.nextStep = nextStep;



    function activate() {
    }



    function login(){

        if(vm.userEmail == 'aa'  && vm.userPassword == "aa1234"){

            var user = {
                userName : "Chris Weinandt",
                userType : "AuthorityUser",
                userPermission : ""
            };
            $rootScope.user = user;
            $localStorage["user"] = user;

            $state.go('authority.portal.industries');
        }

        else if(vm.userEmail == 'bb'  && vm.userPassword == "bb1234"){

            var user = {
                userName : "Shuhao Wang",
                userType : "IndustryUser",
                userPermission : ""
            };
            $rootScope.user = user;
            $localStorage["user"] = user;

            //todo:got to industry portal
            $state.go('industry.portal');
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

//        if(vm.userEmail !== 'aa@linko.com' &&  vm.userEmail !== 'bb@linko.com') {
//            $scope.errorMessage = 'Wrong email address';
//
//            return;
//        }

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
