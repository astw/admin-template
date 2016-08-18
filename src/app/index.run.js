(function() {
  'use strict';

  angular
    .module('testProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');
    $rootScope.showMenu = false;
    
      $rootScope.showHideExtraSmallMenu = function(){
     
        if($rootScope.showMenu == false ){
            $rootScope.showMenu = true;
        } else {
            $rootScope.showMenu = false;
        }
        
    }
      
    	
	      
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $rootScope.showMenu = false; 
     })
    
      
  }

})();
