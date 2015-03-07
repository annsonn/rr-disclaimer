'use strict';

describe('Controller: MediaReleaseCtrl', function () {

  // load the controller's module
  beforeEach(module('rrDisclaimerApp'));

  var MediaReleaseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MediaReleaseCtrl = $controller('MediaReleaseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
