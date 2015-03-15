'use strict';

angular.module('rrDisclaimerApp')
  .controller('AdminCtrl', function ($scope, $http, $location, Auth, User, Forms, ViewFormService) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
  
    $scope.waivers ={};
    
    function getWaivers() {
      Forms.getWaivers()
        .success(function(data) {
        $scope.waivers.waivers = data;
      });
    }
  
    function getMediaConsents() {
      Forms.getMediaConsents()
        .success(function(data) {
        $scope.waivers.mediaConsents = data;
      });
    }
  
    function getMediaReleases() {
      Forms.getMediaReleases()
        .success(function(data) {
        $scope.waivers.mediaReleases = data;
      }); 
    }
  
    $scope.refresh = function(type) {
      if (type === 'waiver') {
        getWaivers();
      } else if (type === 'mediaConsent') {
        getMediaConsents();
      } else if (type === 'mediaRelease') {
        getMediaReleases();
      } else {
        getWaivers();
        getMediaConsents();
        getMediaReleases();
      }
    };
    
    $scope.refresh();
  
    $scope.view = function(waiver, type) {
      ViewFormService.waiver = waiver;
      ViewFormService.type = type;
      $location.path('/view-form');
    };

    $scope.delete = function(waiver, type) {
      Forms.deleteWaiver(waiver, type);
      $scope.refresh(type);
    };
      
  });
