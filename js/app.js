/**
 * The main FE Application module 
 *
 * @type {angular.Module}
 */

'use strict';
(function() {
	angular.module('feApp', [
	  'ngRoute',
	  'ngResource',
	  'ui.bootstrap',
	  
	  // App modules
	  'feApp.navigation',
	  'feApp.home',
	  'feApp.article'
	])
	.constant('ENDPOINT_URI', 'http://localhost:3000')
	.config(function ( $routeProvider,$locationProvider) {
		
		  $routeProvider.otherwise({redirectTo: '/home'});	 
		  $locationProvider.html5Mode(true);
		
	});

})();