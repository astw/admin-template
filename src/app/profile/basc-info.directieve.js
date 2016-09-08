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
        'title2':'=',
        'editmode':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {

      var s = scope.profile;
    }
  }


})();


(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('profileDetails', profileDetails);


  /* @ngInject */
  function profileDetails($state) {
    var directive = {
      templateUrl:'app/profile/details-profile.html',
      link: link,
      restrict: 'AE',
      scope: {
        'userProfile':'=',
        'title1':'=',
        'title2':'=',
        'editmode':'=',
        'registration':'=',
        'process':'='
      }
    };
    return directive;

    function link(scope, element, attrs) {
         scope.requestSignatory = function(){
           console.log(" to down load request signatory ");
           $state.go("authority.portal.downloadsigatory");
         }
    }
  }


})();
