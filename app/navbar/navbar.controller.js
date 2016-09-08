'use strict';

angular.module('soundgrid.controller.navbar', [])

.controller('NavbarCtrl', ['$scope', '$location', 'AudioService', function($scope, $location, AudioService) {

  $scope.isActive = function (currentLocation) {
    return currentLocation === $location.path();
  };

  $scope.goMainPage = function () {
    $location.path('/main');
  };

  $scope.goAboutPage = function () {
    $location.path('/about');
  };

  $scope.goGridPage = function () {
    $location.path('/grid');
  };

  $scope.goEditorPage = function () {
    $location.path('/editor');
  };

}]);
