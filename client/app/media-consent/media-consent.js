'use strict';

angular.module('rrDisclaimerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/media-consent', {
        templateUrl: 'app/media-consent/media-consent.html',
        controller: 'MediaConsentCtrl'
      });
  });
