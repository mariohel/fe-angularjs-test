'use strict';
(function() {
  angular.module('feApp.article')
    .config([
      '$routeProvider', 
      routes
    ])
  ;

  function routes($routeProvider) {
	  $routeProvider.when('/article/:Id', {
		    templateUrl: 'modules/article/article.html',
		    controller: 'feApp.article.articleCtrl'
		  });
  }
})();
