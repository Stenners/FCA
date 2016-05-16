(function() {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

        var vm = this; // jshint ignore: line

        //services (old stuff)
        //vm.angularstrapService = asyncService;
        //asyncService.getPackages();

        asyncService.getPackages().then(function(data) {
            vm.Packages = data;
        });

        vm.subPackChange = function() {
            // console.log(vm.newPackage.price);
            // console.log(vm.Packages.price);
            // vm.newPackage.price = vm.newPackage.price + vm.newPackage.something;
        }

        return vm;
    }
})();
