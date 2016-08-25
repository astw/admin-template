/**
 * Created by swang on 8/25/2016.
 */
/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('registrationIUSecure', registrationIUSecure);

  /* @ngInject */
  function registrationIUSecure() {
    var directive = {
      link: link,
      templateUrl:'app/industry-portal/registration-iu-secure-info.html',
      restrict: 'AE'
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();



