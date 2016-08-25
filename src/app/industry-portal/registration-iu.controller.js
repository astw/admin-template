(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('RegistrationiuController', RegistrationiuController);

  /** @ngInject */
  function RegistrationiuController($timeout, $scope, $state, userService) {
    var vm = this;
    vm.userProfile = {};
    vm.step = 1;

    vm.toProfileOverView = toProfileOverView;
    vm.goToSecurity = goToSecurity;
    vm.toBasic = toBasic;
    vm.saveRegistrationInfo = saveRegistrationInfo;
    vm.nextStep = nextStep;


    function saveRegistrationInfo(){


    }
    function toBasic(){
      vm.step = 1;
    }
    function goToSecurity(){
      vm.step =2 ;
    }
    function toProfileOverView(){
      vm.step =3 ;
    }
    function nextStep(){
      vm.step = 2;
      console.log("next step");

    }

    $scope.kbqQuestions ={
       model: null,
       availableOptions:[
        {
          id: 1,
          value:"What is the first and middle name of your oldest sibling?",
        },
        {
           id: 2,
           value:  "What is your favorite vacation destination?"
        },{
           id: 3,
           value:  "What year and model (yyyy-name) was your first car?"
        },{
           id: 4,
           value:  "What is your favorite TV show?"
        },{
           id: 5,
           value:  "Where did you first meet your spouse?"
        },{
           id: 6,
           value:  "What is your favorite book?"
        },{
           id: 7,
           value: "What was your first pet's name?"
        },{
           id: 8,
           value:  "What is your favorite movie?"
        },{
           id: 9,
           value:  "What street was your high school located on?"
        },{
           id: 10,
           value:  "What is the name of your home town newspaper?"
        },{
           id: 1,
           value:  "What is your favorite hobby?"
        }
      ]
    };


 $scope.secureQuestions ={
       model: null,
       availableOptions: [
       {
        id:1,
        value:"What is the name of your favorite sports team?"
       },
       {
        id:2,
        value: "What street was your childhood home located on?"
       },
       {
        id:3,
        value:"What is the middle name of your oldest child?"
       },
       {
        id:4,
        value:"What town was your wedding held in?"
       },
       {
        id:5,
        value:"What is your grandmother’s maiden name?"
       },
       {
        id:6,
        value:"Where did you attend college?"
       },
       {
        id:7,
        value:"What is your favorite food?"
       },

       {
        id:8,
        value:"Who is your favorite comedian?"
       },
       {
        id:9,
        value:"What is your favorite color?"
       },
       {
        id:10,
        value: "What is your spouse's birth date?"
       }
     ]
    }

  }
})();
