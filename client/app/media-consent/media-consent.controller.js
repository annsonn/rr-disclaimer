'use strict';

angular.module('rrDisclaimerApp')
  .controller('MediaConsentCtrl', function ($scope, Forms) {
    $scope.user = Forms.currentUser;
    $scope.user.data = new Date();
  
    $scope.signatures = {
      recording: {},
      waiver: {}
    };
    
    $scope.clear = function() {
      $scope.user = {};
    };
 
    
  });
