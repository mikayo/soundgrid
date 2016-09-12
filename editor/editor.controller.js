"use strict";

angular.module('soundgrid.controller.editor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/soundgrid/editor', {
    templateUrl: 'soundgrid/editor/editor.html',
    controller: 'EditorCtrl'
  });
}])

.controller('EditorCtrl', ['$scope', 'LoaderService', function($scope, LoaderService) {

  $scope.show = false;
  $scope.default = {
                    "grid": [ {"samples": ["filepath","filepath","filepath","filepath",
                                           "filepath","filepath","filepath","filepath",
                                           "filepath","filepath","filepath","filepath",
                                           "filepath","filepath","filepath","filepath"]},
                              {"colors": ["#000000","#000000","#000000","#000000",
                                          "#000000","#000000","#000000","#000000",
                                          "#000000","#000000","#000000","#000000",
                                          "#000000","#000000","#000000","#000000"]},
                               {"status": [false,false,false,false,
                                          false,false,false,false,
                                          false,false,false,false,
                                          false,false,false,false]}
                            ],
                    "name": "gridname"
                  };

  $scope.saveGrid = function() {
    // update grid status (for display purposes)
    for (var i = 0; i < 16; i++) {
      if ($scope.form.grid[0].samples[i] != "filepath")
        $scope.form.grid[2].status[i] = true;
    }
    LoaderService.saveGrid($scope.form);
  };

  $scope.reset = function() {
    $scope.form = angular.copy($scope.default);
  };

  $scope.toggleSource = function() {
    $scope.show ^= true;
  };

}]);
