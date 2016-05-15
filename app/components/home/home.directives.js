angular.module('angularstrapApp')
    .directive('newPackage', function() {
        return {
            templateUrl: '/app/components/home/views/newPackage.view.html'
        };
    })
    .directive('oldPackage', function() {
        return {
            templateUrl: '/app/components/home/views/oldPackage.view.html'
        };
    })
    .directive('priceComparison', function() {
        return {
            templateUrl: '/app/components/home/views/priceComparison.view.html'
        };

    });
