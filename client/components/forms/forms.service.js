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
        return $http.get('/api/mediaReleases');
      },               
      submitWaiver: function(form) {
        return $http.post('/api/waivers', form);
      },
      submitMediaConsent: function(form) {
        return $http.post('/api/mediaConsents', form);
      },
      submitMediaRelease: function(form) {
        return $http.post('/api/mediaReleases', form);      
      },
      markWaiverViewed: function(waiver, type) {        
        waiver.viewed = true;
        return $http.put('/api/' + type + 's/' + waiver._id, waiver);
      },
      deleteWaiver: function(waiver, type) {
        return $http.delete('/api/' + type + 's/' + waiver._id);
      },
    };
  });
