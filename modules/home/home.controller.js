'use strict';

(function() {
    angular.module('feApp.home')
        .controller('feApp.home.homeCtrl', [
            '$rootScope', 
            '$scope',
            'feApp.home.homeService',
            homeCtrl]);
    function homeCtrl($rootScope, $scope, homeService) {
               
    			/**
                 * list of Articles
                 * @type {Array}
                 */
                var _allArticles = [];

                var ctrl = {
                    /**
                     * Internal functions not to be exposed to views
                     * @type {Object}
                     */
                    locals: {
                       
                        /**
                         * Initialization routine for the controller
                         * @return {Boolean}
                         */
                        init: function() {
                            ctrl.locals.loadArticles();
                            return true;
                        },

                        /**
                         * Load all articles
                         * @return {Void}
                         */
                        loadArticles: function() {
                        	homeService.getAllArticles().then(function (response) {
                        		$scope.dataStore.allArticles=response;			
                    		}); 
                        }
                		
                    },

                    /**
                     * Exported functions to be exposed to views
                     * @type {Object}
                     */
                    exports: {                    	
                        /**
                         * All data retrieved or to be stored
                         * @type {Object}
                         */
                        dataStore: {
                        	/**
                             * List of Articles
                             * @type {Array}
                             */
                        	allArticles: _allArticles,
                        },                       
                        sortArticle : function(article) {
                		    var date = new Date(article.Date_Published);
                		    return date.valueOf();
                		}
                    }
                };

                ctrl.locals.init();
                angular.extend($scope, ctrl.exports); //export to $scope only what needs to be exported
                
        }
})();