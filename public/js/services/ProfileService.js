angular.module('ProfileService', []).factory('Profile',['$http', function($http){
  return {
    //call to get all profiles
    get: function() {
      return $http.get('/api/profiles');
    },

    create: function(profileData) {
      return $http.post('/api/profiles',profileData);
      console.log("Profile.create is called");
    },

    delete: function(id) {
      return $http.delete('/api/profiles/' + id);
    }
  }


}]);
