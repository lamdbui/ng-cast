angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      this.getFormattedUrl = () => `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
