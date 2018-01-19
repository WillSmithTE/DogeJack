var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('/home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController'
    }).state('register', {
        cache: false,
        url: '/register',
        templateUrl: 'register.html'
    }).state('login', {
        cache: false,
        url: '/login',
        templateUrl: 'login.html'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

app.controller('homeController', function ($scope) {
    $scope.visible = false;
    $scope.show = function () {
        if ($scope.visible) {
            $scope.visible = false;
        } else {
            $scope.visible = true;
        }
    }

}).controller('registerController', function ($scope) {

}).controller('loginController', function ($scope) {

});

