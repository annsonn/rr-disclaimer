'use strict';

angular.module('rrDisclaimerApp')
  .service('Forms', function ($http) {
    
    return {
      submitWaiver: function(waiver) {
        return $http.post('/api/waivers', waiver);
      },
      submitMediaConsent: function(form) {
        console.log('submitting:', form);
        //return $http.post('/forms/media', form);
      }
      
    };
  });
