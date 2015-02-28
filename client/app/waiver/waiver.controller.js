'use strict';

angular.module('rrDisclaimerApp')
  .controller('WaiverCtrl', function ($scope) {
    
    $scope.days = [1,2,3,4,5,6,7,8,9,10,
                  11,12,13,14,15,16,17,18,19,20,
                  21,22,23,24,25,26,27,28,29,30,
                  31];
    $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.years = [2015,2016];
    
    $scope.user = {
      signDay: new Date().getDate(),
      signMonth: $scope.months[new Date().getMonth()],
      signYear: new Date().getFullYear()
    };
  });
