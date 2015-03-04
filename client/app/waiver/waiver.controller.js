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
    
    
    // Submit function that is passed to directive and returns boolean for disabling submit button
    $scope.submit = function() {
      $scope.submitAttempted = true; 
      if (!$scope.waiverForm.$invalid && !$scope.signature.$isEmpty) {
        $scope.user.signature = $scope.signature.dataUrl;
        Forms.submitWaiver($scope.user)
          .success(function(result){
            console.log(result);
            return true;
          })
          .error(function(error){ 
            console.log(error);
            return false;
          });
      } else {
        return false;
      }
    };
  });
