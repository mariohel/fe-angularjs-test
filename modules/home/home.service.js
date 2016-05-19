'use strict';

(function() {
	angular.module('feApp.home')	
		.factory('feApp.home.homeService', [
			'$q', 
			'$resource', 
			'ENDPOINT_URI',
			homeService
		]);

	function homeService($q, $resource,ENDPOINT_URI){
		var factory={};
		
		/**
		 * Get all Articles
		 */
		factory.getAllArticles = function() {
			var deferred = $q.defer();

			if(factory._articles){
				deferred.resolve(factory._articles);
			}else{
				var Article = $resource(ENDPOINT_URI+'/Article');
				Article.query().$promise
					.then(function (data) {
						deferred.resolve(data);
						factory._articles=data;
					})
					.catch(function (error) {
						deferred.reject(error);
					});
			}
			return deferred.promise;			 
		};
		

		return factory;
	}
})();