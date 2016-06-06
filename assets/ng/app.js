var app = angular.module('MyApp', []);

app.directive('headertpl', [function () {
	return {
		restrict: 'E',
        templateUrl: 'assets/static/headertpl.html'
	};
}]);

app.directive('footertpl', [function () {
	return {
		restrict: 'E',
        templateUrl: 'assets/static/footertpl.html'
	};
}]);

app.controller('HomeCtrl', ['$scope', function($scope){
    $scope.url= "home";
}]);

app.controller('AproposCtrl', ['$scope', function($scope){
    $scope.url= "a-propos";
}]);

app.controller('NosservicesCtrl', ['$scope', function($scope){
    $scope.url= "nos-services";
}]);