'use strict';

angular.module('soundgrid.controller.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/soundgrid/about', {
    templateUrl: 'soundgrid/about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);
