(function() {
    'use strict';
    
    angular.module('testProject')
    .filter(industryFilter);
    
    
    /** @ngInject */
    function industryFilter(dataSet, inputKey){
        
        var output=[];
        
        angular.forEach(dataSet,function(item){
            output.push(item);
            console.log('==== item=', item);
        })
        
        return output; 
    }
    
})();


 