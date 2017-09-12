angular.module('video-player')
  .service('youTube', function($http) {
    this.search = searchQuery => {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          q: searchQuery,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true
        }
      });
    };
  });
