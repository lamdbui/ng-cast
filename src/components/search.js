angular.module('video-player')
  .component('search', {
    bindings: {
      setVideosCallback: '<'
    },
    controller: function(youTube) {
      var that = this;
      this.getVideos = () => {
        youTube.getVideos().then(
          function(resolve) {
            console.log('RESOLVE:', resolve.data.items);
            that.setVideosCallback(resolve.data.items);
          },
          function(reject) {
            console.log('REJECT:', resolve.data.items);
          }
        );
      };
    },
    templateUrl: 'src/templates/search.html'
  });
