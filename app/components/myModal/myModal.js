angular.module('myModal', ['ui.bootstrap'])
    // demo controller
    .controller('modalDemo', function($scope, $modal, $log) {
        // list
        $scope.items = ['angularjs', 'backbone', 'canjs', 'Ember', 'react'];
        // open click
        $scope.open = function(size) {
            var modalInstance = $modal.open({
                templateUrl: './components/myModal/myModalContent.html',
                controller: 'ModalInstanceCtrl', // specify controller for modal
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
            // modal return result
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date())
            });
        }
    })
    // modal controller
    .controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

        $scope.items = items;

        $scope.selected = {
            item: $scope.items[0]
        };
        // ok click
        $scope.ok = function() {
            $modalInstance.close($scope.selected.item);
            const { dialog } = require('electron').remote
            console.log(dialog.showMessageBox({ option: { title: "test" } }))
        };
        // cancel click
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
            const { BrowserWindow } = require('electron').remote
            let child = new BrowserWindow({
                width: 400,
                height: 200,
                title: '',
                modal: true,
                frame: true
            });
            child.on('close', function() { win = null })
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
    });