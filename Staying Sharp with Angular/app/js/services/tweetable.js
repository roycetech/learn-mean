// angular.module('NoteWrangler')
// .factory('Tweetable', function TweetableFactory($http) {
//   return function(potentialTweet) {
//     return $http({
//           method: 'POST',
//           url: "http://gentle-spire-1153.herokuapp.com/tweet",
//           data: {description:  potentialTweet}
//         });
//   };
// });


// angular.module('NoteWrangler')
// .factory('Tweetable', ['$http', function TweetableFactory($http) {
//   var characterLength = 1000;
//   return function(potentialTweet) {
//     return $http({
//       method: 'POST',
//       url: 'http://gentle-spire-1153.herokuapp.com/tweet',
//       data: {
//         description: potentialTweet,
//         maxLength: characterLength
//       }
//     });
//   };
// }]);

angular.module('NoteWrangler')
.provider('Tweetable', [function TweetableProvider() {
  var characterLength = 144;
  this.setLength = function(length) {
    characterLength = length;
  };
  this.$get = function($http) {
    return function(potentialTweet) {
      return $http({
        method: 'POST',
        url: 'http://gentle-spire-1153.herokuapp.com/tweet',
        data: {
          description: potentialTweet,
          maxLength: characterLength
        }
      });
    };
  };
}]);
