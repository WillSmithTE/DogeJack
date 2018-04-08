import { AuthService } from './AuthService';

var app = angular.module('app', ['ui.router', 'auth0.auth0']).config(configRoutesAndAuth);

configRoutesAndAuth.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'angularAuth0Provider'
];

function configRoutesAndAuth($stateProvider, $locationProvider, $urlRouterProvider, angularAuth0Provider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    }).state('register', {
        url: '/register',
        templateUrl: 'partials/register.html',
        controller: 'registerController'
    }).state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: AuthService.SERVICE_NAME
    }).state('terms', {
        url: '/terms',
        templateUrl: 'partials/terms.html'
    }).state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html'
    }).state('play', {
        url: '/play',
        templateUrl: 'partials/play.html'
    });

    angularAuth0Provider.init({
        clientID: '5CIM7lZsK-rJbzTHGNl-iW0SowLcmK62',
        domain: 'willsmith.au.auth0.com',
        responseType: 'token id_token',
        audience: 'https://willsmith.au.auth0.com/userinfo',
        redirectUri: 'http://localhost:8080/#!/play',
        scope: 'openid'
    });
    // Removes hashes from urls
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

};

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
    $scope.codeClicked = false;
    $scope.clickCode = function () {
        $scope.codeClicked = true;
    }

});

