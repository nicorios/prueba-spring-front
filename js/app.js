// Define the `phonecatApp` module
var oksocios = angular.module('oksocios', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
oksocios.controller('FirstController', ["$scope", "$http", function($scope, $http){
	$scope.name="Nicolas";
	$http.get('http://localhost:8090/users')
	  .then(function (response) {

	    var data = response.data;

	    $scope.user = data;
	    console.log(data);
	});
}]);