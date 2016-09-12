'use strict';

angular.module('soundgrid.controller.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ["$scope", "$location", function($scope, $location) {

  // main page controls

}]);
