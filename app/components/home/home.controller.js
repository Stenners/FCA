(function() {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

        var vm = this;

        //services
        //vm.angularstrapService = asyncService;
        //asyncService.getPackages();



        $http.get('app/shared/packages.json')
		.success(function(data, status, headers, config) {
            vm.Packages = data.Packages;
        });

        return vm;
    }
})();
