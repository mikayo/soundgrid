'use strict';

angular.module('soundgrid.controller.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/soundgrid/main', {
    templateUrl: 'soundgrid/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ["$scope", "$location", function($scope, $location) {

  // main page controls

}]);
