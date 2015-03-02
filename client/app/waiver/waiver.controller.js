'use strict';

angular.module('rrDisclaimerApp')
  .controller('WaiverCtrl', function ($scope) {
           
    $scope.user = {      
      date: new Date()
    };
      
    $scope.signature = {};
    
    
    $scope.submit = function() {
      $scope.submitAttempted = true;
      
      console.log($scope.signature);
      console.log('submitting', $scope.user);
    };
  });
