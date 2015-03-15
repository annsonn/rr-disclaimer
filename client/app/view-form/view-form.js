'use strict';

angular.module('rrDisclaimerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/view-form', {
        templateUrl: 'app/view-form/view-form.html',
        controller: 'ViewFormCtrl'
      });
  });
