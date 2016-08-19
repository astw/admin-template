(function(){
    'use strict';
    
    angular
        .module('testProject')
        .directive('mainHeader', mainHeader); 
    
    
    /*ngAnnotation */
    function mainHeader(){
        return {
            templateUrl :'/app/layout/header/main-header.html'
        }
    }
    
})();


