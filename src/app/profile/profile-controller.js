/**
 * Created by swang on 9/1/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .controller('ProfileController', ProfileController);


  /* @ngInject */
  function ProfileController() {
    var vm = this;
    vm.title = 'ProfileController';

    activate();

    ////////////////

    function activate() {
    }
  }

})();


