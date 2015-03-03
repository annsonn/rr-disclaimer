'use strict';

angular.module('rrDisclaimerApp')
  .service('Forms', function ($http, $q) {
    
    return {
      submitWaiver: function(form) {
        console.log('submitting:', form);        
        //return $http.post('/forms/waiver', form);       
      },
      submitMediaConsent: function(form) {
        console.log('submitting:', form);
        //return $http.post('/forms/media', form);
      }
      
    };
  });
