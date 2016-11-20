// angular.module('NoteWrangler')
// .controller('NotesIndexController', ['$scope', '$http', function($scope, $http) {
//   var controller = this;

//   $http({method: 'GET', url: '/notes'}).success(function(data) {
//     $scope.notes = data;
//   });
// }]);


// angular.module('NoteWrangler')
// .controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
//   Note.all()
//     .success(function(data) {
//       $scope.notes = data;
//     });
// }]);


angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {

  // Note.all().success(function(data) {
  //   $scope.notes = data;
  // });

  $scope.notes = Note.query();


  $scope.tweetThatNote = function(description) {
    Tweetable(description)
      .success(function(status) {
        console.log(status);
      });
  };
}]);