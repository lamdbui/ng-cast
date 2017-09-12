angular.module('video-player')
  .component('search', {
    bindings: {
      setVideosCallback: '<'
    },
    controller: function(youTube) {
      this.getVideos = function() {
        youTube.getVideos();
      };
    },
    templateUrl: 'src/templates/search.html'
  });
