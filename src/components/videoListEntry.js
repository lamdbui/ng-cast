angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      item: '<'
    },
    controller: function() {

      this.getFormattedUrl = () => {
        return 'https://i.ytimg.com/vi/OPxeCiy0RdY/default.jpg';
      };
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
