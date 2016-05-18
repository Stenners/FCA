/**
 * Load modules for application
 */

angular

    .module('angularstrapApp', [
        'ui.router',
        'angularstrapApp.homeServices',
        'ui.bootstrap'
    ]);
	//
    // .constant('CONFIG',
    // {
	//     DebugMode: true,
	//     StepCounter: 0,
	//     APIHost: 'http://localhost:12017'
	// });
