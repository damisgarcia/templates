'use strict';

/**
 * @ngdoc configuration
 * @name odontoApp
 * @description
 * # odontoApp
 */
angular.module('odontoApp',['ngAnimate','ui.router','ui.bootstrap']).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('visitant', {
      url: "/home",
      templateUrl: "app/views/visitant.html",
      controller: "VisitantCtrl as visitant"
    })
})
