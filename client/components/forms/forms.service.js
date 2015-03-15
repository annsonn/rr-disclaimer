'use strict';

angular.module('rrDisclaimerApp')
  .service('Forms', function ($http, $q) {
    
    return {
      currentUser: {},
      getWaivers: function() {
        return $http.get('/api/waivers');
      },
      getMediaConsents: function() {
        return $http.get('/api/mediaConsents');
      },
      getMediaReleases: function() {
        return $http.get('/api/mediaConsents');
      },               
      submitWaiver: function(form) {
        return $http.post('/api/waivers', form);
      },
      submitMediaConsent: function(form) {
        return $http.post('/api/mediaConsents', form);
      },
      submitMediaRelease: function(form) {
        return $http.post('/api/mediaReleases', form);      
      }
    };
  });
