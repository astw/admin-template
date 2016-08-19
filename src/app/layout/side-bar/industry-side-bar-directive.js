(function(){
  'use strict';
  angular
    .module('testProject')
    .directive('industrySideBar', sideBar);

  /* @ngInject */
  function sideBar() {
    return {
      templateUrl: '/app/layout/side-bar/industry-side-bar-content.html'
    }
  }
})();