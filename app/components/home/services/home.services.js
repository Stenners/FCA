(function() {
    'use strict';

    angular.module('angularstrapApp.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

    function asyncService($http, $q) {

        var factory = {
            //properties
            retrievedData: [],
            getPackages: getPackages,
			getPacks: getPacks
        };

        function getPackages() {
            var deferred = $q.defer();
            $http.get('app/shared/packages.json')
                .success(function(data) {
                    factory.retrievedData = data.Packages;
                    deferred.resolve(factory.retrievedData);
                });
            return deferred.promise;
        }

		function getPacks() {
            var deferred = $q.defer();
            $http.get('app/shared/packs.json')
                .success(function(data) {
                    factory.retrievedData = data.Packs;
                    deferred.resolve(factory.retrievedData);
                });
            return deferred.promise;
        }

        return factory;
    }
})();
