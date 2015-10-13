'use strict';

/**
 * @ngdoc function
 * @name odontoApp.controller:VisitantCtrl
 * @description
 * # VisitantCtrl
 * Controller of the odontoApp
 */
angular.module('odontoApp')
  .controller('VisitantCtrl', function () {
    this.carousel = {interval: 3000, wrap: true}
    this.carousel.slides = [
      {image:"app/images/slide_01.jpg",text:"Lorem ipsum"},
      {image:"app/images/slide_02.jpg",text:"Lorem ipsum"},
      {image:"app/images/slide_03.jpg",text:"Lorem ipsum"}
    ]
  });
