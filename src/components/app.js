angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      var that = this;
      this.default = {
        videos: exampleVideoData,
        searchQuery: 'cats'
      };
      youTube.search(this.default.searchQuery).then(
        (resolve) => {
          that.videos = resolve.data.items;
          that.currentVideo = that.videos[0];
        }, (reject) => {
          // set some defaults on failure
          that.videos = this.default.videos;
          that.currentVideo = that.videos[0];
        });

      this.selectVideo = selectedVideo => {
        this.currentVideo = selectedVideo;
      };

      this.setVideos = newVideos => {
        this.videos = newVideos;
        this.currentVideo = this.videos[0];
      };

      // make sure we bind so we ensure this gets called with the current context
      this.selectVideo = this.selectVideo.bind(this);
    },
    templateUrl: 'src/templates/app.html'
  });
