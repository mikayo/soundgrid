'use strict';

angular.module('soundgrid', [
  'ngRoute',
  'soundgrid.controller.navbar',
  'soundgrid.controller.main',
  'soundgrid.controller.about',
  'soundgrid.controller.grid',
  'soundgrid.controller.editor',
  'soundgrid.service.audio',
  'soundgrid.service.loader',
  'soundgrid.service.midi',
  'soundgrid.version'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.otherwise({redirectTo: '/soundgrid/main'});

  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

}]);
