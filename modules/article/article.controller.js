'use strict';

(function() {
    angular.module('feApp.article')
        .controller('feApp.article.articleCtrl', [
            '$routeParams', 
            '$scope',
            'filterFilter',
            'feApp.article.articleService',
            articleCtrl]);
    function articleCtrl($routeParams, $scope,filterFilter, articleService) {
               
    			/**
                 * list of Articles
                 * @type {Array}
                 */
                var _article = [];

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
                        	articleService.getArticle($routeParams.Id).then(function (response) {
                        		$scope.dataStore.article=response[0];			
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
                        	article: _article                        	
                        }
                    
                    }
                };

                ctrl.locals.init();
                angular.extend($scope, ctrl.exports); //export to $scope only what needs to be exported
                
        }
})();