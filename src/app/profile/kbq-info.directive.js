/**
 * Created by swang on 9/2/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('kbqInfo', kbqInfo);


  /* @ngInject */
  function kbqInfo() {
    var directive = {
      templateUrl:'app/profile/kbq-info.html',
      link: link,
      restrict: 'AE',
      scope: {
        'userProfile':'=',
        'title1':'=',
        'title2':'=',
        'editmode':'=',
        'kbqQuestions':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }


})();


