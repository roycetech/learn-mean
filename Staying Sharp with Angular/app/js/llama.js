/**
1.8 Llamas in Space

A brand new llama recruit has signed up to go into space and he's ready to be added to the list on
the server. Make a $http() function call to make the proper request to the server at the /llamas.json URL.

Tasks:
 */

var newLlamaRecruit = {
  llamaOne: 'Larry Llama'
};

$http({method: 'POST', url: 'llamas.json', data: newLlamaRecruit});
