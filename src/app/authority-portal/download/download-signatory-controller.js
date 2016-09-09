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

    vm.goIndustryUserList = downloadsignatory;

    function downloadsignatory() {

      $state.go("industry.industryUsers");
    };


    ////////////////

    function activate() {

    }
  }

})();


