/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('registrationIUProfile', registrationIUProfile);

  /* @ngInject */
  function registrationIUProfile() {
    var directive = {
      link: link,
      templateUrl:'app/industry-portal/registration-iu-profile.html',
      restrict: 'AE'
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();



