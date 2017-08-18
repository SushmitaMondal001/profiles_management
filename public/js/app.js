var app = angular.module('profilesApp', ['ui.router']);


app.controller('viewEditController',function($scope,$http) {
  var vm = this;
  vm.isEditing = false;
  vm.change = {};

  $scope.submitForm = function(isValid) {
    if(isValid) {
      $http.post('/recommendation',vm.change).then(function (response) {
        vm.movie = Object.assign({}, vm.change);
        console.log('response status: ' + response.status);
        console.log('status text: ' + response.statusText);
      });

      vm.movie = Object.assign({}, vm.change);
      vm.isEditing = false;
    }

  };

  vm.edit = function () {
    vm.isEditing = true;
    vm.change = Object.assign({}, vm.movie);
    console.log('edit movie selected');
    //console.log('before saveeee: title is ' + $scope.title);
  };

  $http.get('/recommendation').then(function (res) {
     vm.movie = res.data;
    // $scope.title = object.title;
    // $scope.date = object.date;
    // $scope.duration = object.duration;
    // $scope.genre = object.genre;
    // $scope.synopsis = object.synopsis;

    console.log('calling http.get....');
  });

  vm.cancel = function () {
    vm.isEditing = false;

  };


	});
