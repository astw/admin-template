/**
 * Created by swang on 9/2/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('securityQuestions', securityQuestions);


  /* @ngInject */
  function securityQuestions() {
    var directive = {
      templateUrl:'app/profile/security-questions.html',
      link: link,
      restrict: 'AE',
      scope: {
        'userProfile':'=',
        'title1':'=',
        'title2':'=',
        'editmode':'=',
        'secureQuestions':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();

