'use strict';

angular.module('rrDisclaimerApp')
  .controller('WaiverCtrl', function ($anchorScroll, $scope, $location, Forms) {
           
    $scope.user = {      
      date: new Date()
    };
      
    $scope.signature = {};
    
    $scope.clear = function() {
      $scope.user = {};
    };
    
    $scope.goToMediaConsent = function(){
      $location.hash('title');
      $anchorScroll();
      $location.path('/media-consent');      
    };
        
    // Submit function that is passed to directive and returns boolean for disabling submit button
    $scope.submit = function() {
      $scope.submitAttempted = true; 
      if (!$scope.waiverForm.$invalid && !$scope.signature.$isEmpty) {
        $scope.user.signature = $scope.signature.dataUrl;
        Forms.submitWaiver($scope.user)
          .success(function(result){                  
            Forms.currentUser = {
              firstName: result.firstName,
              lastName: result.lastName
            };
            $scope.inputsDisabled = true;
            $scope.user.signature = result.signature;
            return true;
          })
          .error(function(error){
            console.log('error: ', error);
            return false;
          });
      } else {
        return false;
      }
    };
  });
