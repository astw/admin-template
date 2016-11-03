/**
 * Created by swang on 8/24/2016.
 */
(function () {
  'use strict';

  angular
    .module('testProject')
    .directive('simpleHeader', simpleHeader);


  /* @ngInject */
  function simpleHeader(){
    return {
      templateUrl :'app/layout/header/simple-header.html'
    }
  }

})();


