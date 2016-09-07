/**
 * Created by swang on 9/6/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .controller('DownloadsignatoryController', DownloadsignatoryController);


  /* @ngInject */
  function DownloadsignatoryController($state) {
    var vm = this;
    vm.title = 'Downloadsignatory';

    activate();

    if($state.previous.name == 'authority.portal.profile'){
      $scope.registration = true;
    } else {
      $scope.registration = false;
    }


    ////////////////

    function activate() {

    }
  }

})();


