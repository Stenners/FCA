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

		asyncService.getPacks().then(function(data) {
            vm.Packs = data;
        });

        vm.subPackChange = function(CurrentPackage, checkId) {

            var oldPrice = parseInt(vm[CurrentPackage].price, 10),
                newPrice = parseInt(checkId.price, 10);
            if (checkId.selected) {
                vm[CurrentPackage].price = oldPrice + newPrice;
            } else {
                vm[CurrentPackage].price = oldPrice - newPrice;
            }

			vm.getChannels(CurrentPackage, checkId);

        };

		vm.getChannels = function(CurrentPackage, checkId) {
			console.log(checkId.name);
			var packSearch = vm.Packs.filter(function( obj ) {
				return obj.name == checkId.name;
			});

			if (checkId.selected) {
				if (!vm.addedChannels) {
					vm.addedChannels = packSearch[0].channels;
				} else {
					vm.addedChannels = vm.addedChannels.concat(packSearch[0].channels);
				}


			}

			// angular.forEach(vm[CurrentPackage].packs, function(obj) {
			// 	if(obj.name === checkId.name){
			// 		console.log(obj);
			// 		if (checkId.selected) {
			// 			obj.channels = packSearch[0].channels;
			// 		} else {
			// 			obj.channels = "";
			// 		}
			// 	}
			// });


			//console.log(packageSearch);
			//console.log(packSearch[0].channels);
			//vm.addedChannels = packSearch[0].channels;
			//vm[CurrentPackage].packs = angular.merge(vm[CurrentPackage].packs.channels, packSearch[0].channels);
		};

		vm.betterOrWorse = function(a,b) {
			return (a > b ? 'worse' : 'better');
			// Some bugs here.
		};

        return vm;
    }
})();
