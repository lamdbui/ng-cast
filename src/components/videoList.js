angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideoCallback: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
