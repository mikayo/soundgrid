'use strict';

angular.module('soundgrid.controller.navbar', [])

.controller('NavbarCtrl', ['$scope', '$location', 'AudioService', function($scope, $location, AudioService) {

  $scope.isActive = function (currentLocation) {
    return currentLocation === $location.path();
  };

  $scope.goMainPage = function () {
    $location.path('/soundgrid/main');
  };

  $scope.goAboutPage = function () {
    $location.path('/soundgrid/about');
  };

  $scope.goGridPage = function () {
    $location.path('/soundgrid/grid');
  };

  $scope.goEditorPage = function () {
    $location.path('/soundgrid/editor');
  };

}]);
