'use strict';

angular.module('soundgrid.controller.grid', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/soundgrid/grid', {
    templateUrl: 'soundgrid/grid/grid.html',
    controller: 'GridCtrl'
  });
}])

.controller('GridCtrl', ["$scope", 'AudioService', 'LoaderService', function($scope, AudioService, LoaderService) {

  $scope.trigger = function(padNum) {
    AudioService.playSound(padNum);
    console.log(padNum);
  };

  $scope.init = function() {
    LoaderService.initGrid("soundgrid/grid/json/demo.json");
  };

}]);
