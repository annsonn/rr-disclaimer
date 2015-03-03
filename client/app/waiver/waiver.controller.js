'use strict';

angular.module('rrDisclaimerApp')
  .controller('WaiverCtrl', function ($scope, $mdDialog, Forms) {
           
    $scope.user = {      
      date: new Date()
    };
      
    $scope.signature = {};
    
    $scope.clear = function() {
      $scope.user = {};
    };
    
    $scope.submit = function() {           
      $scope.submitAttempted = true;
      if (!$scope.waiverForm.invalid && !$scope.signature.isEmpty && $scope.user.agreed) {        
        $scope.user.signature = $scope.signature.dataUrl;
        Forms.submitWaiver($scope.user);
      }
    };
  });
