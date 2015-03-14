'use strict';

angular.module('rrDisclaimerApp')
  .service('Forms', function ($http) {
    
    return {
      currentUser: {},
      submitWaiver: function(form) {
        return $http.post('/api/waivers', form);
      },
      submitMediaConsent: function(form) {
        return $http.post('/api/mediaConsents', form);
      },
      submitMediaRelease: function(form) {
        return $http.post('/api/mediaConsents', form);      
      }
    };
  });
