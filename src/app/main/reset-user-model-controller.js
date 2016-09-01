// (function () {
//   'use strict';
//
//   angular
//     .module('testProject')
//     .controller('ModalInstanceCtrl', ModalInstanceCtrl);
//
//
//   /* @ngInject */
//   function ModalInstanceCtrl($uibModalInstance, $scope) {
//     var vm = this;
//     vm.title = 'ControllerName';
//
//     vm.selected = {
//        item:['itmes12']
//     };
//
//     vm.ok = function () {
//       $uibModalInstance.close(vm.selected.item);
//     };
//
//     vm.cancel = function () {
//       $uibModalInstance.dismiss('cancel');
//     };
//
//     var datasources = [{ ID: 13, Name: "ID is 13" }, { ID: 14, Name: "ID is 14" }];
//     $scope.datasources = datasources;
//     var dataview = { DataSourceID: 14 };
//     $scope.dataview = dataview;
//
//
//     activate();
//
//     ////////////////
//
//     function activate() {
//
//     }
//   }
//
// })();
//
//
