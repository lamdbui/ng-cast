angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      item: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
