'use strict';

angular.module('rrDisclaimerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      
      .when('/settings', {
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });

/*
.when('/signup', {
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
*/