angular.module('NoteWrangler')
.directive('nwSlabText', function($timeout) {
  return {
    link: function(scope, element) {
      $timeout(function() {
        element.slabText();
      });
    }
  };
});

