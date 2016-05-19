'use strict';

(function() {
	angular.module('feApp.article')	
		.factory('feApp.article.articleService', [
			'$q', 
			'$resource', 
			'ENDPOINT_URI',
			articleService
		]);

	function articleService($q, $resource,ENDPOINT_URI){
		var factory={};
		
		/**
		 * Get all Article by Id
		 */
		factory.getArticle = function(id) {
			var deferred = $q.defer();
			
			var Article = $resource(ENDPOINT_URI+'/Article');
			Article.query({Id:id}).$promise
				.then(function (data) {
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});
			
			return deferred.promise;			 
		};
		

		return factory;
	}
})();