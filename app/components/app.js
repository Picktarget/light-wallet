define(['angular', 'angularRoute'], function(angular) {
    var app = angular.module('wallet', ['ngRoute', 'walletModule', 'myModal']);
    var template_path = './components/';
    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: template_path + 'wallet/wallet.html',
                controller: 'walletCtrl'
            })
            .when('/send', {
                templateUrl: template_path + 'send/send.html',
            })
            .when('/contract', {
                templateUrl: template_path + 'contract/contract.html',
            })
            .otherwise({ redirectTo: '/' });
    }]).controller('NavbarCtrl', function($scope) {
        $scope.isActive0 = true;
        $scope.isActive1 = false;
        $scope.isActive2 = false;
        $scope.navClick = function(index) {
            if (index == 0) {
                $scope.isActive0 = true;
                $scope.isActive1 = false;
                $scope.isActive2 = false;
            }
            if (index == 1) {
                $scope.isActive0 = false;
                $scope.isActive1 = true;
                $scope.isActive2 = false;
            }
            if (index == 2) {
                $scope.isActive0 = false;
                $scope.isActive1 = false;
                $scope.isActive2 = true;
            }
        }
    });
});