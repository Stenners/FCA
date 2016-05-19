/**
 * Load modules for application
 */

angular

    .module('angularstrapApp', [
        'ui.router',
        'angularstrapApp.homeServices',
        'ui.bootstrap',
		'ds.objectDiff'
    ]);
