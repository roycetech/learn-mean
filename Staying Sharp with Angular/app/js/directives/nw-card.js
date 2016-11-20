// angular.module('NoteWrangler')
// .directive('nwCard', [function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/directives/nw-card.html',
//     controller: function($scope) {
//       $scope.header = 'Note Title';
//       $scope.description = 'A lovely note description.';
//     }
//   };
// }]);

angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '='
    },
    link: function(scope, element) {
      if (scope.tweeted) {
        element.addClass('tweeted');
      }
    }

  };
});

