angular.module('AddCtrl',['ProfileService']).controller('AddController', 'Profile', function(Profile){
  var vm = this;

  vm.add = function () {
    console.log('add function call!!!!!');
    Profile.create(vm.change).then(function (response) {
    //vm.movie = Object.assign({}, vm.change);
    console.log('response status: ' + response.status);
    console.log('status text: ' + response.statusText);
  });
  };



});
