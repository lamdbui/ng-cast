angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(selectedVideo) {
        console.log(selectedVideo);
        this.currentVideo = selectedVideo;
        console.log('TEST:',this.currentVideo.snippet.title);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
