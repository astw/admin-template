(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($timeout, $rootScope, $cookies, $scope,$stateParams, $state) { 
      
    var vm = this; 
    activate();
    
    vm.login = login;
    //vm.logout = logout;
    $scope.step = 1; 
    vm.nextStep = nextStep;
      
 
      
    function activate() {  
    } 
    
   
      
    function login(){  
        
        if(vm.userEmail == 'aa@linko.com'  && vm.userPassword == "aa1234"){
            
            var user = {
                userName : "Chris Weinandt",
                userType : "Authority User",
                userPermission : ""
            };
            $rootScope.user = user;
            $cookies.put("user", user); 
        }
        
        else if(vm.userEmail == 'bb@linko.com'  && vm.userPassword == "bb1234"){
            
            var user = {
                userName : "Shuhao Wang",
                userType : "Industry User",
                userPermission : ""
            };
            $rootScope.user = user;
            $cookies.put("user", user); 
        }
        
        if($rootScope.user !== null){
            $state.go('authority.industries');
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
