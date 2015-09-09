'use strict';

/**
 * @ngdoc overview
 * @name affixalllApp
 * @description
 * # affixalllApp
 *
 * Main module of the application.
 */
angular
  .module('storkApp', [
    'ngAnimate',
    'ngRoute'
    // 'ngSanitize'
  ])
  .config(['$routeProvider',function ($routeProvider) {

    $routeProvider
      .when('/intro', {
        templateUrl: 'views/intro.html'
      })
      .when('/explore', {
        templateUrl: 'views/explore.html',
        controller: 'ExploreCtrl'
      })
      .otherwise({
        redirectTo: '/intro'
      });

  }]);