angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(selectedVideo) {
        this.currentVideo = selectedVideo;
      };

      // make sure we bind so we ensure this gets called with the current context
      this.selectVideo = this.selectVideo.bind(this);
    },
    templateUrl: 'src/templates/app.html'
  });
