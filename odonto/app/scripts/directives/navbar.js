'use strict';

/**
 * @ngdoc directive
 * @name odontoApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('odontoApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/templates/navbar.html',
      restrict: 'E',
      link: function(){
        // Jquery Module => Affix
        $('#bp-navbar').affix({
          offset: {
            top: 20,
            bottom: function () {
              return ( this.bottom = $('.footer').outerHeight(true) )
            }
          }
        })
      }
    };
  });
