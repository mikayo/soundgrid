'use strict';

angular.module('soundgrid.controller.grid', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grid', {
    templateUrl: 'grid/grid.html',
    controller: 'GridCtrl'
  });
}])

.controller('GridCtrl', ["$scope", 'AudioService', 'LoaderService', function($scope, AudioService, LoaderService) {

  $scope.trigger = function(padNum) {
    AudioService.playSound(padNum);
    console.log(padNum);
  };

  $scope.init = function() {
    LoaderService.initGrid("grid/json/demo.json");
  };

}]);
