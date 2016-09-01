(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('basicProfile', profileBasic);


  /* @ngInject */
  function profileBasic() {
    var directive = {
      templateUrl:'app/profile/basic-info.html',
      link: link,
      restrict: 'AE',
      scope: {
        'userProfile':'=',
        'title1':'=',
        'title2':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {

      var s = scope.profile;
    }
  }


})();
