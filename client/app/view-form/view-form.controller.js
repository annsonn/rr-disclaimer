'use strict';

angular.module('rrDisclaimerApp')
  .controller('ViewFormCtrl', function ($scope, ViewFormService) {
    $scope.form = ViewFormService;
  });
