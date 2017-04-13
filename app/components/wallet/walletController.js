define(function() {
    'use strict';
    var walletModule = angular.module('walletModule', []);
    return walletModule.controller('walletCtrl', ['$scope', function($scope) {
        $scope.accountItems = [{
                account_hash: '0xbaBA96aa034303f86691c8A5cc819d4E2376175d',
                name: 'main account',
                money: 10.00
            },
            {
                account_hash: '0xbaBA96aa034303f86691c8A5cc819d4E237affff',
                name: 'account 1',
                money: 10.01
            },
            {
                account_hash: '0xcdBA96aa034303f86691c8A5cc819d4E237617fd',
                name: 'account 2',
                money: 10.02
            },
            {
                account_hash: '0xcdBA96aa034303f86691c8A5cc819d4E237617fd',
                name: 'account 3',
                money: 10.03
            }
        ];
        $scope.testAdd = function() {
            const { BrowserWindow } = require('electron').remote
                // const { top } = require('electron').remote.getCurrentWindow
            let child = new BrowserWindow({
                width: 400,
                height: 200,
                title: '',
                // parent: top,
                modal: true,
                frame: true
            });
            child.on('close', function() { child = null });
            child.on('blur', function() {
                console.log('blur');
                child.showInactive();
                child.setAlwaysOnTop(true);
                return;
            });
            var url = require('url');
            var path = require('path');
            child.loadURL(url.format({
                pathname: path.join(__dirname, './components/myModal/myModalContent.html'),
                protocol: 'file',
                slashes: true
            }));

            child.show();
        }
    }]).directive('icoPixel', function() {
        return {
            restrict: 'AE',
            scope: {},
            link: function(scope, element, attrs) {
                var fillIconPixel = function(account_hash) {
                    var icon = blockies.create({ // All options are optional
                        seed: account_hash, // seed used to generate icon data, default: random
                        //color: '#dfe', // to manually specify the icon color, default: random
                        //bgcolor: '#aaa', // choose a different background color, default: random
                        size: 8, // width/height of the icon in blocks, default: 8
                        scale: 4, // width/height of each block in pixels, default: 4
                        spotcolor: '#00b0f0' // each pixel has a 13% chance of being of a third color, 
                            // default: random. Set to -1 to disable it. These "spots" create structures
                            // that look like eyes, mouths and noses. 
                    });
                    return icon;
                }
                element.append(fillIconPixel(attrs.howToFill));
            }
        }
    });
});