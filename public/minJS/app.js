var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appController', 'ngSanitize'])
            .constant('FIREBASE_URL','https://pandatodo.firebaseio.com/');

var appController = angular.module('appController', ['firebase']);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl : 'views/login.html',
            controller  : 'registerController'
        })
        .when('/register', {
            templateUrl : 'views/register.html',
            controller  : 'registerController'
        })
        .when('/game', {
            templateUrl : 'views/game.html',
            controller  : 'gameController'
        })
        .when('/profile', {
            templateUrl : 'views/profile.html',
            controller  : 'profileController'
        })
        .when('/branding', {
            templateUrl : 'views/branding.html'
        })
        .otherwise({
            redirectTo : '/login'
        });
}]);


myApp.filter('fracSize', function($filter) {
    return function(input) {
        return Math.round(input * 10)/10;
    }
});