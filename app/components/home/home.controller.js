(function() {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

        var vm = this;  // jshint ignore: line

        //services
        //vm.angularstrapService = asyncService;
        //asyncService.getPackages();

        asyncService.getPackages().then(function(result) {
            vm.Packages = result;
        });


        return vm;
    }
})();
