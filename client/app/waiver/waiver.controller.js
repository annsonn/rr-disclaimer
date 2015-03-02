'use strict';

angular.module('rrDisclaimerApp')
  .controller('WaiverCtrl', function ($scope) {
           
    $scope.user = {      
      date: new Date()
    };
        
    $scope.submit = function() {
      $scope.submitAttempted = true;
      console.log('waiverform', $scope.waiverForm);
      
      console.log('submitting', $scope.user);
    };
  });
