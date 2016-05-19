'use strict';
(function() {
  angular.module('feApp.home')
    .config([
      '$routeProvider', 
      routes
    ])
  ;

  function routes($routeProvider) {
	  $routeProvider.when('/home', {
		    templateUrl: 'modules/home/home.html',
		    controller: 'feApp.home.homeCtrl'
		  });
  }
})();
