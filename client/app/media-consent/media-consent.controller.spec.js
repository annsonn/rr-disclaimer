'use strict';

describe('Controller: MediaConsentCtrl', function () {

  // load the controller's module
  beforeEach(module('rrDisclaimerApp'));

  var MediaConsentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaConsentCtrl = $controller('MediaConsentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
