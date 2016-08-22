(function() {
  'use strict';

  angular
    .module('testProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $localStorage) {

    $log.debug('runBlock end');
    $rootScope.showMenu = false;
    $rootScope.logout = logout;
    $rootScope.user = $localStorage["user"];
      
    function logout(){ 
       console.log('in indux.run.js  logout');
       delete $localStorage.user;
       delete $rootScope.user; 
       $state.go("plain.login"); 
    }
      
    $rootScope.showHideExtraSmallMenu = function(){
     
        if($rootScope.showMenu == false ){
            $rootScope.showMenu = true;
        } else {
            $rootScope.showMenu = false;
        }
        
    }
          
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $rootScope.showMenu = false; 
        
//         if(!$rootScope.user){
//              $state.go("plain.login");
//         }
     })
    
      
  }

})();
