// angular.module('NoteWrangler')
// .factory('Note', ['$http', function NoteFactory($http) {
//   return {
//     all: function() {
//       return $http({method: 'GET', url: '/notes'});
//     }
//   };
// }]);

// angular.module('NoteWrangler')
// .factory('Note', ['$resource', function NoteFactory($resource) {
//   return $resource('/notes', {}, {});
// }]);

angular.module('NoteWrangler')
.factory('Note',['$resource', function NoteFactory($resource) {
  return $resource('/notes', {}, {
    tweetIt: {
      method: 'PUT'
    }
  });
}]);

