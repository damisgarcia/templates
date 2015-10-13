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

    this.services = [
      {
        image:"app/images/slide_01.jpg",
        title:"Serviço #1",
        desc:"These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold."
      },
      {
        image:"app/images/slide_02.jpg",
        title:"Serviço #2",
        desc:"These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold."
      },
      {
        image:"app/images/slide_03.jpg",
        title:"Serviço #3",
        desc:"These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold."
      }
    ]
  });
