/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('registrationIUBasic', registrationIUBasic);

  /* @ngInject */
  function registrationIUBasic() {
    var directive = {
      link: link,
      templateUrl:'app/industry-portal/registration-iu-basic-info.html',
      restrict: 'AE'
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();


