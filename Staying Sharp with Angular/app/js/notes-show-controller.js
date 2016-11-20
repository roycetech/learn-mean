angular.module('NoteWrangler')
.controller('NotesShowController', ['$http', '$routeParams', function($http, $routeParams) {
  var controller = this;
  $http({ method: 'GET', url: '/notes/' + $routeParams.id})
    .success(function(data) {
      controller.note = data;
    });
}]);

