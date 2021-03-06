var app = angular.module('myApp');

app.factory('diceFactory', function($http) {
    var diceResponse = 0;

  return {
    post: function(options, callback) {
      $http.post('/api/jobs', options)
      .then(function successCallback(response) {
        diceResponse = response.data;
        callback(diceResponse);
      },
      function errorCallback(response) {
            console.log(response);
      });
    },
    data: function() {
      return diceResponse;
    }
  }
});
