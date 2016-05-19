'use strict';

(function() {
	angular.module('feApp.navigation')
		.directive('feappCategoryNav', [
			'$rootScope', 
			'feApp.navigation.navigationService',
			feAppCategoryNavDirective
		]);

	function feAppCategoryNavDirective($rootScope, NavigationService){
		return {
		  templateUrl: 'modules/navigation/components/category-nav/category-nav.view.html',
		  controller: [
		  	'$rootScope',
		  	'$scope',
		  	function($rootScope, $scope) {
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
		  				}		  				
		  			},
		  			exports: {
		  				dataStore: {
		  					allCategories: []
		  				}
		  			},
		  			init: function() {
		  				ctrl.locals.loadCategories();
		  			}
		  		};

		  		ctrl.init();
		  		angular.extend($scope, ctrl.exports);		  		
		  	}
		  ]
		};
	}
})();