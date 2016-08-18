(function(){
  'use strict';
  angular
    .module('testProject')
    .directive('sideBar', sideBar);

  /* @ngInject */
  function sideBar() {
    return {
      templateUrl: '/app/side-bar-template.html'
    }
  }
})();