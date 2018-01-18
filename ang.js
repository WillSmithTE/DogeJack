angular.module('app', ['ui.router'])
    .controller('homeController', function ($scope) {
        $scope.show = false;
        $scope.register = function () {
            if ($scope.show) {
                $scope.show = false;
            } else {
                $scope.show = true;
            }
        }
    }).controller('registerController', function($scope) {
        
    }).config(function ($stateProvider) {
        $stateProvider.state('root', {
            templateUrl: 'index.html'
        }).state('root.register', {
            templateUrl: 'register.html'
        }).state('root.login', {
            templateUrl: 'login.html'
        })
    });
