'use strict';

angular.module('rrDisclaimerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/media-release', {
        templateUrl: 'app/media-release/media-release.html',
        controller: 'MediaReleaseCtrl'
      });
  });
