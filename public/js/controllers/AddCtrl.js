// angular.module('AddCtrl',['ProfileService']).controller('AddController', ['Profile', function(Profile,$http){
//   var vm = this;
//
//   vm.add = function () {
//     console.log('Aug-19: add function call to add Profile with name is 123: ' + vm.change.name);
//
//   //   Profile.create(vm.change).then(function (response) {
//   //
//   //   console.log('response status: ' + response.status);
//   //   console.log('status text: ' + response.statusText);
//   // });
//
//     $http.post('/api/profiles',vm.change).then(function (response) {
//     //  vm.movie = Object.assign({}, vm.change);
//       console.log('response status: ' + response.status);
//       console.log('status text: ' + response.statusText);
//     });
//   };
//
// }]);

angular.module('AddCtrl',[]).controller('AddController',function($scope,$http) {
  var vm = this;

  vm.add = function () {
    console.log('Aug-19: add function call to add Profile with name is 344433: ' + vm.change.name);

      $http.post('/api/profiles',vm.change).then(function (response) {

      console.log('response status: ' + response.status);
      console.log('status text: ' + response.statusText);
    });

  };

});
