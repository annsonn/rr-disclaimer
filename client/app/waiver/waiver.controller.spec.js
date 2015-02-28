'use strict';

describe('Controller: WaiverCtrl', function () {

  // load the controller's module
  beforeEach(module('rrDisclaimerApp'));

  var WaiverCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaiverCtrl = $controller('WaiverCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
