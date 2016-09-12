"use strict"

angular.module('soundgrid.service.audio', [])

.service('AudioService', [function() {

  // Check audio support
  window.AudioContext = (window.AudioContext || window.webkitAudioContext || null);
  if (!AudioContext) {
    throw new Error("AudioContext not supported!")
  }

  // Create audio context
  var context = new AudioContext();

  // loader service
  var bufferLoader;
  var loaded = false;

  function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }

  BufferLoader.prototype.loadBuffer = function(url, index) {
    // load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open("GET","sounds/" + url, true);
    request.responseType = "arraybuffer";

    var loader = this;

    request.onload = function() {
      // asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response, function(buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
          }
          loader.bufferList[index] = buffer;
          if (++loader.loadCount == loader.urlList.length)
            loader.onload(loader.bufferList);
        }
      );
    }

    request.onerror = function() {
      alert('BufferLoader: XHR error');
    }

    request.send();
  }

  BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; i++)
      this.loadBuffer(this.urlList[i], i);
  }

  // load audio data
  function finishedLoading() {
    loaded = true;
    console.log("sounds loaded");
  }

  this.loadAudio = function(soundList) {
    if(!context) {
      return;
    }
    if(loaded) {
      finishedLoading();
    }
    else {
      bufferLoader = new BufferLoader(context, soundList, finishedLoading);
      bufferLoader.load();
    }
  };

  // routing
  var mixer = context.createGain();
  mixer.muted = false;
  mixer.gain.value = 1;
  mixer.connect(context.destination);

  // Controls
  this.volume = function(value) {
    mixer.gain.value = Math.cos((1-value) * 0.5*Math.PI);
  };

  this.mute = function() {
    mixer.gain.value = 0;
    mixer.muted = true;
  };

  this.unmute = function(volume) {
    if(mixer.muted) {
      this.volume(volume);
      mixer.muted = false;
    }
  };

  // play audio samples
  this.playSound = function(audioId) {
    var source = context.createBufferSource();
    source.buffer = bufferLoader.bufferList[audioId];
    source.connect(mixer);
    source.loop = false;
    source.start(0);
  }

}]);
