angular.module('AddCtrl',['ProfileService']).controller('AddController', ['Profile', function(Profile){
  var vm = this;

  vm.add = function () {
    console.log('add function call to add Profile with name is: ' + vm.change.name);
    Profile.create(vm.change).then(function (response) {

    console.log('response status: ' + response.status);
    console.log('status text: ' + response.statusText);
  });
  };

}]);
