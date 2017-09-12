angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideoCallback: '<'
    },
    // controller: function() {
    //   this.onClick = () => {
    //     console.log()
    //   };
    // },
    templateUrl: 'src/templates/videoList.html'
  });
