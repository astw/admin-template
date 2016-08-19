(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $scope,$stateParams, webDevTec, toastr) { 
      
    var vm = this; 
    activate();
      
    $scope.step = 1; 
    vm.nextStep = nextStep;
    

    function activate() {  
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
