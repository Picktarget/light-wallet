(function() {
    var myDirective = angular.module('myDirective', []);
    myDirective.directive('icoPixel', function($scope) {
        return {
            restrict: 'AE',
            link: function($scope, $element, $attrs) {
                var icon = $scope.$apply($attrs.howtofill);
                angular.element($element).append(icon);
            }
        }
    });
})();