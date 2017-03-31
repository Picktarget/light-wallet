(function() {
    app.directive('icoPixel', function() {
        return function($scope, $element, $attrs) {
            var icon = blockies.create({ // All options are optional
                seed: '8a21589c6ac2413295d41d8955bffff', // seed used to generate icon data, default: random
                //color: '#dfe', // to manually specify the icon color, default: random
                //bgcolor: '#aaa', // choose a different background color, default: random
                size: 8, // width/height of the icon in blocks, default: 8
                scale: 4, // width/height of each block in pixels, default: 4
                spotcolor: '#000' // each pixel has a 13% chance of being of a third color, 
                    // default: random. Set to -1 to disable it. These "spots" create structures
                    // that look like eyes, mouths and noses. 
            });
            angular.element($element).append(icon);
        }
    });
})();