'use strict';

(function() {
	angular.module('feApp.navigation')
		.directive('feappArticlesList', [
			'$rootScope', 
			'feApp.navigation.navigationService',
			feAppArticleListDirective
		])
	;

	function feAppArticleListDirective($rootScope, NavigationService){
		return {
		  templateUrl: 'modules/navigation/components/articles-list/articles-list.view.html',
		   controller: [
		  	'$rootScope',
		  	'$scope',
		  	function($rootScope, $scope) {
		  		var ctrl = {
		  			locals: {
		  				/**
		  				 * Load all Articles
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
		  					allArticles: []
		  				},
	            		selectArticle:function(article){
	            			$rootScope.currentArticle=article;
	            		}
		  			},
		  			init: function() {
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