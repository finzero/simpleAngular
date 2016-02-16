var app = angular.module('simpleAngular',[
	'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/views/home.html',
        controller: ['$scope',function($scope){console.log('this is homeCtrl')}]
      }).
      when('/page1', {
        templateUrl: 'app/views/page1.html',
        controller: 'Page1Ctrl'
      }).
      when('/page2', {
        templateUrl: 'app/views/page2.html',
        controller: 'Page2Ctrl'
      }).
       when('/appJS', {
        templateUrl: 'app/views/appJS.html',
        controller: ["$scope",function($scope){
        	console.log('contoh controller langsung');
        }]
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
