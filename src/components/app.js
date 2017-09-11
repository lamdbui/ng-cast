angular.module('video-player')
  .component('app', {
    //template: '<h1 data=[]>Hello</h1>'
    controller: function() {
      this.data = 'Lam';
    },
    // bindings: {
    //   data: '<'
    // },
    template: '<h1>{{$ctrl.data}}</h1>'
    //templateUrl: 'src/templates/app.html'

  });
