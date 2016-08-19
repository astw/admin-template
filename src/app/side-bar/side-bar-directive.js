(function(){
  'use strict';
  angular
    .module('testProject')
    .directive('sideBar', sideBar);

  /* @ngInject */
  function sideBar() {
    return {
      templateUrl: '/app/side-bar/side-bar-template.html'
    }
  }
})();