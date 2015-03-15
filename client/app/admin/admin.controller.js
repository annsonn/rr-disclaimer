'use strict';

angular.module('rrDisclaimerApp')
  .controller('AdminCtrl', function ($scope, $http, $location, Auth, User, Forms, ViewFormService) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
  
    $scope.waivers ={};
  
    Forms.getWaivers()
      .success(function(data) {
      $scope.waivers.waivers = data;
    });
  
    Forms.getMediaConsents()
      .success(function(data) {
      $scope.waivers.mediaConsents = data;
    });
  
    Forms.getMediaReleases()
      .success(function(data) {
      $scope.waivers.mediaReleases = data;
    });
  
    $scope.view = function(waiver, type) {
      ViewFormService.waiver = waiver;
      ViewFormService.type = type;
      $location.path('/view-form');
    };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
