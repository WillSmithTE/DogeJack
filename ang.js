var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController'
    }).state('register', {
        url: '/register',
        templateUrl: 'register.html'
    }).state('login', {
        url: '/login',
        templateUrl: 'login.html'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});

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

