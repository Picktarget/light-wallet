(function() {
    window.app = angular.module('wallet', []);
    app.controller('ctrl-wallet', function($scope, $compile) {
        $scope.account_hash = "0xbaBA96aa034303f86691c8A5cc819d4E2376175d";
        // $scope.account_pixel.append(iconElement);
    });
})();