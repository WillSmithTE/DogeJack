export const routesProvider = function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
        templateUrl: 'partials/login.html'
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

    // Removes hashes from urls
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

};

export function initRoutes(angular: IAngularStatic) {
    angular.module('app').config(routesProvider);
}

