'use strict';

(function() {
	angular.module('feApp.navigation')
	    .factory('feApp.navigation.navigationService', [
			'$q', 
			'$resource', 
			'ENDPOINT_URI',
			navigationService
		]);

	function navigationService($q, $resource,ENDPOINT_URI){
		var factory={};
		/**
		 * Get all Articles assigned to specific Category
		 * @param {String} categoryId	The $id of the Category to which this Article is attached
		 */		
		factory.getArticlesByCategoryId = function(categoryId) {
			var deferred = $q.defer();

			var Article = $resource(ENDPOINT_URI+'/Article');
			Article.query({Category_Id:categoryId}).$promise
				.then(function (data) {
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});

			return deferred.promise;			 
		};

		/**
		 * Get all Articles
		 */
		factory.getAllArticles = function() {
			var deferred = $q.defer();

			// Return already fetched Data from before
			if(factory._articles){
				deferred.resolve(factory._articles);
			}else{
				var Article = $resource(ENDPOINT_URI+'/Article');
				Article.query().$promise
					.then(function (data) {
						factory._articles=data;
						deferred.resolve(data);
					})
					.catch(function (error) {
						deferred.reject(error);
					});
			}
			return deferred.promise;			 
		};

		/**
		 * Get all Categories
		 */
		factory.getAllCategories = function() {
			var deferred = $q.defer();

			// Return already fetched Data from before
			if(factory._categories){
				deferred.resolve(factory._categories);
			}else{
				var Category = $resource(ENDPOINT_URI+'/Category');
				Category.query().$promise
					.then(function (data) {
						factory._categories=data;
						deferred.resolve(data);
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