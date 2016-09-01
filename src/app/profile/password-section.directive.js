(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('passwordSection', passwordSection);


  /* @ngInject */
  function passwordSection() {
    var directive = {
      templateUrl:'app/industry-portal/password-section.html',
      link: link,
      restrict: 'A',
      scope: {
        'userProfile':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();


