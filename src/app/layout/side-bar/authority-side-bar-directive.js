(function(){
  'use strict';
  angular
    .module('testProject')
    .directive('authoritySideBar', sideBar);

  /* @ngInject */
  function sideBar() {
    return {
      templateUrl: '/app/layout/side-bar/authority-side-bar-content.html'
    }
  }
})();