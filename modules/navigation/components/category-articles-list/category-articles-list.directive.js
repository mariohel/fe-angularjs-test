'use strict';

(function() {
	angular.module('feApp.navigation')
		.directive('feappCategoryArticlesList', [
			'feApp.navigation.navigationService',
			feAppCategoryArticleListDirective
		])
	;

	function feAppCategoryArticleListDirective(NavigationService){
		return {
		  restrict: 'EA',
		  transclude: true,
		  scope: {
			  category: '='
		  },
		  templateUrl: 'modules/navigation/components/category-articles-list/category-articles-list.view.html',			  
		  controller: [
		  	'$scope','$attrs',
		  	function($scope,$attrs) {
		  		var ctrl = {
		  			locals: {
		  				/**
		  				 * Load all Categories
		  				 * @return {Void}
		  				 */
		  				loadCategories: function() {
		  					NavigationService.getAllCategories()
		  					.then(function (data) {
		  						$scope.dataStore.allCategories = data;
		  					}, function (error) {
		  						console.log(error);
		  					});	  				           
		  				},
		  				/**
		  				 * Load all Articles grouped by Categories
		  				 * @return {Void}
		  				 */
		  				loadArticles: function() {
		  					NavigationService.getAllArticles()
		  						.then(function (data) {
			  						$scope.dataStore.allArticles = data;
			  					}, function (error) {
			  						console.log(error);
			  					});	  		  								           
		  				}		  				
		  			},
		  			exports: {
		  				dataStore: {
		  					allCategories:[],
		  					allArticles: []
		  				}
		  			},
		  			init: function() {		  				
		  				ctrl.locals.loadCategories();
		  				ctrl.locals.loadArticles();
		  			}
		  		};

		  		ctrl.init();
		  		angular.extend($scope, ctrl.exports);		  		
		  	}
		  ]
		};
	}
})();