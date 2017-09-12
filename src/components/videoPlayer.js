angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      // console.log('LAM', this.video);
      this.getFormattedUrl = () => {
        console.log('LAM', this.video);
        return `https://www.youtube.com/embed/${this.video.id.videoId}`;
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
