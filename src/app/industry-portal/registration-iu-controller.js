(function () {
  'use strict';

  angular
    .module('testProject')
    .controller('RegistrationiuController', RegistrationiuController);

  /** @ngInject */
  function RegistrationiuController($timeout, $scope, $state, userService, industryService, $localStorage,questionService) {
    var vm = this;
    vm.userProfile = {};
    vm.step = 1;

    var user = $localStorage["user"];
    var email = user.email;

    var fullUser = industryService.getUserByEmail(email);
    console.log(fullUser);
    $scope.userProfile = fullUser;

    $scope.title1= "My Profile";

    $scope.profileDetailsNextEditBtnText = 'Next';
    $scope.industryProgramEditSaveBtnText = 'Next';

    $scope.editProfileDetails = true;
    $scope.editProfileKBQ = true;
    $scope.editProfileSQ = true;

    $scope.currentStep = 1;

    $scope.profileDetailsNextEditBtn = profileDetailsNextEditBtn;
    $scope.kbqNextEditBtnClicked = kbqNextEditBtnClicked;

   //---
    $scope.kbqPreviousBtnClicked = kbqPreviousBtnClicked;
    $scope.kbqEditBtnClicked = kbqEditBtnClicked;
    $scope.kbqNextBtnClicked = kbqNextBtnClicked;
   // ---
    $scope.sqPriviousBtnClicked = sqPriviousBtnClicked;
    $scope.sqEditBtnClicked = sqEditBtnClicked;
    $scope.sqSaveBtnClicked = sqSaveBtnClicked;


    $scope.detailEditBtnClicked = detailEditBtnClicked;
    $scope.detailNextBtnClicked = detailNextBtnClicked;




//-----  details
    function detailNextBtnClicked() {
      $scope.editProfileDetails = false;
      $scope.currentStep = 2;
    }

    function detailEditBtnClicked() {
      $scope.editProfileDetails = true;
      $scope.currentStep = 1;
    }
//-----  kbq questions
    function  kbqPreviousBtnClicked() {
      $scope.currentStep = 1;
      $scope.editProfileKBQ = false;
    }
    function kbqEditBtnClicked() {
      $scope.editProfileKBQ = true;
    }

    function kbqNextBtnClicked() {
      $scope.editProfileKBQ = false;
      $scope.currentStep = 3;
    }
//-----


// security questions
    function sqPriviousBtnClicked(){
      $scope.editProfileSQ = false;
      $scope.currentStep = 2;
    }

    function sqEditBtnClicked() {
      $scope.editProfileSQ = true;
    }

    function sqSaveBtnClicked() {
      // save .....
    }


    function kbqNextEditBtnClicked() {
      $scope.editProfileKBQ = !  $scope.editProfileKBQ;

      if($scope.editProfileKBQ){

        $scope.industryProgramEditSaveBtnText = 'Next';
        $scope.editProfileSQ = true;

      } else {
        $scope.industryProgramEditSaveBtnText = 'Edit';
      }
    }

    function profileDetailsNextEditBtn() {

      $scope.editProfileDetails = !  $scope.editProfileDetails;
      if($scope.editProfileDetails){
         $scope.profileDetailsNextEditBtnText = 'Next';
         $scope.editProfileKBQ = true;
      } else {
        $scope.profileDetailsNextEditBtnText = 'Edit';
      }

      console.log("toggle profile detail edit/next button");
      console.log($scope.editProfileDetails);
    }

    vm.toProfileOverView = toProfileOverView;
    vm.goToSecurity = goToSecurity;
    vm.toBasic = toBasic;
    vm.saveRegistrationInfo = saveRegistrationInfo;
    vm.nextStep = nextStep;


    function saveRegistrationInfo() {
      //$state.go("plain.login");
      vm.step = 4;
    }

    function toBasic() {
      vm.step = 1;
    }

    function goToSecurity() {
      vm.step = 2;
    }

    function toProfileOverView() {
      vm.step = 3;
    }

    function nextStep() {
      vm.step = 2;
      console.log("next step");

    }


    $scope.kbqQuestions = {
      model:null,
      availableOptions: questionService.getAllKBQUestions()
    };

    // $scope.kbqQuestions = {
    //   model: null,
    //   availableOptions: [{
    //     id: 1,
    //     value: "What is the first and middle name of your oldest sibling?",
    //   }, {
    //     id: 2,
    //     value: "What is your favorite vacation destination?"
    //   }, {
    //     id: 3,
    //     value: "What year and model (yyyy-name) was your first car?"
    //   }, {
    //     id: 4,
    //     value: "What is your favorite TV show?"
    //   }, {
    //     id: 5,
    //     value: "Where did you first meet your spouse?"
    //   }, {
    //     id: 6,
    //     value: "What is your favorite book?"
    //   }, {
    //     id: 7,
    //     value: "What was your first pet's name?"
    //   }, {
    //     id: 8,
    //     value: "What is your favorite movie?"
    //   }, {
    //     id: 9,
    //     value: "What street was your high school located on?"
    //   }, {
    //     id: 10,
    //     value: "What is the name of your home town newspaper?"
    //   }, {
    //     id: 1,
    //     value: "What is your favorite hobby?"
    //   }]
    // };

    $scope.secureQuestions = {
      model: null,
      availableOptions: questionService.getAllSecurityQuestions()
    };

    // $scope.secureQuestions = {
    //   model: null,
    //   availableOptions: [{
    //     id: 1,
    //     value: "What is the name of your favorite sports team?"
    //   }, {
    //     id: 2,
    //     value: "What street was your childhood home located on?"
    //   }, {
    //     id: 3,
    //     value: "What is the middle name of your oldest child?"
    //   }, {
    //     id: 4,
    //     value: "What town was your wedding held in?"
    //   }, {
    //     id: 5,
    //     value: "What is your grandmother’s maiden name?"
    //   }, {
    //     id: 6,
    //     value: "Where did you attend college?"
    //   }, {
    //     id: 7,
    //     value: "What is your favorite food?"
    //   },
    //
    //     {
    //       id: 8,
    //       value: "Who is your favorite comedian?"
    //     }, {
    //       id: 9,
    //       value: "What is your favorite color?"
    //     }, {
    //       id: 10,
    //       value: "What is your spouse's birth date?"
    //     }
    //   ]
    // }

  }
})();
