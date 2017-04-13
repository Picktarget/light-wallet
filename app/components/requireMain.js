requirejs.config({
    paths: {
        angular: "http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min",
        angularRoute: "http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route",
        ui_bootstrap_tpls: "http://cdn.bootcss.com/angular-ui-bootstrap/0.11.2/ui-bootstrap-tpls",

        app: "./app",
        blockies: "../assets/js/blockies",
        walletController: "../components/wallet/walletController",
        myModal: '../components/myModal/myModal'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularRoute: {
            deps: ["angular"],
            exports: 'angularRoute'
        },
        ui_bootstrap_tpls: {
            deps: ["angular"],
            exports: 'ui_bootstrap_tpls'
        },
        walletController: {
            deps: ["angular", "blockies"],
            exports: 'walletController'
        },
        myModal: {
            deps: ["angular", "ui_bootstrap_tpls"],
            exports: 'myModal'
        }
    }
});

requirejs(['angular', 'angularRoute', 'app', 'blockies',
    'walletController', 'ui_bootstrap_tpls', 'myModal'
], function(angular) {
    angular.bootstrap(document, ["wallet"]); //初始化整app
});