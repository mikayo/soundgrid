"use strict";

angular.module('soundgrid.service.loader', [])

.service('LoaderService', ['$http', '$q', 'AudioService', function($http, $q, AudioService) {

  var sampleList;
  var colorList;
  var padList;

  function padStatus(padNum) {
    return padList.status[padNum];
  };

  function loadObjectTypesData(fileName) {
    var objectData = $q.defer();
    $http.get(fileName).success(function(data) {
      objectData.resolve(data);
    });
    return objectData.promise;
  };

  function initPads(colors, status) {
    for (var i = 0; i < colors.length; i++) {
      var pad = document.getElementById("pad" + i);
      pad.style.backgroundColor = colors[i];
      if (!status[i])
        pad.style.visibility = "hidden";
    }
  };

  this.padStatus = function(padNum) {
    return padList.status[padNum];
  }

  this.initGrid = function(gridName) {
    // load data from json file
    var gridPromise = loadObjectTypesData(gridName);
    $q.resolve(gridPromise).then(function(data) {
      sampleList = data.grid[0];
      colorList = data.grid[1];
      padList = data.grid[2];
      // call audio buffer loader
      AudioService.loadAudio(sampleList.samples);
      // set pad properties
      initPads(colorList.colors, padList.status);
    });
  }

  this.saveGrid = function(grid) {
    // save data to json file
    var fs = require('fs');
    var string = JSON.stringify(grid);
    fs.writeFile('grid/json/' + grid.name + '.json', string, (err) => {
      if (err) throw err;
      console.log('file saved');
    });
  }

}]);
