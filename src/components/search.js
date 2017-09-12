angular.module('video-player')
  .component('search', {
    bindings: {
      setVideosCallback: '<'
    },
    controller: function(youTube) {
      // reference to the correct object for the callback
      var that = this;
      this.inputText = '';
      this.handleKeyPress = (event) => {
        if (event.key === "Enter") {
          this.getVideos();
        }
      };
      this.getVideos = () => {
        youTube.getVideos(that.inputText).then(
          function(resolve) {
            that.setVideosCallback(resolve.data.items);
          },
          function(reject) {
            console.log('REJECT:', reject);
          }
        );
      };
    },
    templateUrl: 'src/templates/search.html'
  });
