'use strict';

angular.module('rrDisclaimerApp')
  .service('Forms', function ($http) {
    
    return {
      submitWaiver: function(waiver) {
        console.log('submitting:', waiver);
        return $http.post('/api/waivers', waiver);
      },
      submitMediaConsent: function(form) {
        console.log('submitting:', form);
        //return $http.post('/forms/media', form);
      }
      
    };
  });
