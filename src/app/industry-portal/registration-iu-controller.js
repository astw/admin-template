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

    console.log($state);


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


    if($state.current.name == 'authority.portal.profile'){
      $scope.editProfileDetails = false;
      $scope.editProfileKBQ = false;
      $scope.editProfileSQ = false;
      $scope.registration = false;
    } else {
      $scope.userProfile = null;
      $scope.registration = true;
    }

    $scope.profileDetailsNextEditBtn = profileDetailsNextEditBtn;
    $scope.kbqNextEditBtnClicked = kbqNextEditBtnClicked;
    $scope.detailsSaveBtnClicked = detailsSaveBtnClicked;

   //---
    $scope.kbqPreviousBtnClicked = kbqPreviousBtnClicked;
    $scope.kbqEditBtnClicked = kbqEditBtnClicked;
    $scope.kbqNextBtnClicked = kbqNextBtnClicked;
    $scope.kbqSaveBtnClicked = kbqSaveBtnClicked;
   // ---
    $scope.sqPriviousBtnClicked = sqPriviousBtnClicked;
    $scope.sqEditBtnClicked = sqEditBtnClicked;
    $scope.sqSaveBtnClicked = sqSaveBtnClicked;


    $scope.detailEditBtnClicked = detailEditBtnClicked;
    $scope.detailNextBtnClicked = detailNextBtnClicked;

    $scope.requestSignatory = requestSignatory;


//-----  details
    function detailNextBtnClicked() {
      $scope.editProfileDetails = false;
      $scope.currentStep = 2;
    }

    function detailEditBtnClicked() {
      $scope.editProfileDetails = true;
      $scope.currentStep = 1;
    }

    function detailsSaveBtnClicked() {
      $scope.editProfileDetails = false;
       // save details
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

    function kbqSaveBtnClicked() {
      //. save kbq
      $scope.editProfileKBQ = false;
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
      // save security questions;
      $scope.editProfileSQ = false;
      //$state.go("plain.login");
    }


    function requestSignatory() {
      console.log('in side request sinagory ');


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


    $scope.secureQuestions = {
      model: null,
      availableOptions: questionService.getAllSecurityQuestions()
    };

  }
})();
