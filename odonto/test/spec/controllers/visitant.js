'use strict';

describe('Controller: VisitantCtrl', function () {

  // load the controller's module
  beforeEach(module('odontoApp'));

  var VisitantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VisitantCtrl = $controller('VisitantCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VisitantCtrl.awesomeThings.length).toBe(3);
  });
});
