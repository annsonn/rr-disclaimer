'use strict';

angular.module('rrDisclaimerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/waiver', {
        templateUrl: 'app/waiver/waiver.html',
        controller: 'WaiverCtrl'
      });
  });
