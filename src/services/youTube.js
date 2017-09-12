angular.module('video-player')
  .service('youTube', function($http) {
    this.getVideos = function() {
      return $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search`,
        params: {
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          q: 'cats',
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true
        }
      });
      // .then(function(resolve) {
      //   console.log('RESOLVE:', resolve.data.items);
      //   //this.setVideos(resolve.data);
      //   return resolve.data.items;
      // }, function(reject) {
      //   console.log('REJECT:', reject.data);
      // });
    };
  });
