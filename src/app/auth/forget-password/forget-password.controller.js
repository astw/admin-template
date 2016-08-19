(function() {
  'use strict';

  angular
    .module('testProject')
    .controller('ForgetPasswordController', ForgetPasswordController);

  /** @ngInject */
  function ForgetPasswordController($timeout, $scope,$stateParams, webDevTec, toastr) { 
      
    var vm = this; 
    activate();

    $scope.step = 1; 
      
    function activate() {  
    } 
      
  }
})();
