(function() {
    'use strict';

    angular.module('angularstrapApp')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService", "ObjectDiff"];

    function homeController($scope, $http, $window, $q, asyncService, ObjectDiff) {

        var vm = this; // jshint ignore: line

		vm.filter = 'changed';

        asyncService.getPackages().then(function(data) {
            vm.Packages = data;
        });

        asyncService.getPacks().then(function(data) {
            vm.Packs = data;
        });

        vm.getChannels = function(CurrentPackage) {
            vm.newPrice = 0;
            if (vm[CurrentPackage]) {
                if (CurrentPackage === 'newPackage') {
                    vm.newChannels = [];
                } else {
                    vm.oldChannels = [];
                }
                angular.forEach(vm[CurrentPackage].packs, function(pack) {
                    if (pack.selected) {
                        var matchPacks = vm.Packs.filter(function(obj) {
                            return pack.name === obj.name;
                        });
                        if (CurrentPackage === 'newPackage') {
                            vm.newChannels = vm.newChannels.concat(matchPacks[0].channels);
                        } else {
                            vm.oldChannels = vm.oldChannels.concat(matchPacks[0].channels);
                        }
                        vm.newPrice += matchPacks[0].price;
                    }
                });
                vm[CurrentPackage].price = vm.newPrice;
            }
        };

        vm.betterOrWorse = function(a, b) {
            return (a > b ? 'worse' : 'better');
            // Some bugs here.
        };

		vm.doChannelDiff = function() {
			vm.diffArray = [];
			vm.diff = ObjectDiff.diffOwnProperties(vm.oldChannels,vm.newChannels);

			//vm.diffValueChanges = ObjectDiff.toJsonDiffView(vm.diff);
			//vm.diffArray = vm.diff.value;

			angular.forEach(vm.diff.value, function(el) {
				console.log(el);
				if (el.changed === "removed") {
					vm.diffArray.push(el);
				}

			});
			//console.log(vm.diffArray);
		};

        $scope.$watch('ctrl.newPackage', function(newVal, oldVal) {
            //console.log(newVal);
            //	console.log(oldVal);
            vm.getChannels('newPackage');
			vm.doChannelDiff();
			// you can directly diff your objects js now or parse a Json to object and diff

        }, true);
        $scope.$watch('ctrl.oldPackage', function() {
            //console.log('oldPackage updated');
            vm.getChannels('oldPackage');
			vm.doChannelDiff();
        }, true);


        return vm;
    }
})();
