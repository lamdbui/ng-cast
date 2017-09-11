angular.module('video-player')
  .component('app', {
    controller: function() {
      this.data = exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'
  });
