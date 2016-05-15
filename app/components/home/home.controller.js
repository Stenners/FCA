(function() {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

        var vm = this;  // jshint ignore: line

        //services (old stuff)
        //vm.angularstrapService = asyncService;
        //asyncService.getPackages();

        asyncService.getPackages().then(function(data) {
            vm.Packages = data;
        });

        vm.newClick = function(){
            console.log('this');
        }

        vm.newPackage = {};
        vm.newPackage.breakfast = false;
        vm.newPackage.lunch = false;
        vm.newPackage.singleModel = 1;
        vm.newPackage.price = 0;
        vm.newPackage.channels = {};

        return vm;
    }
})();
