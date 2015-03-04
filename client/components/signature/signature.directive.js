
angular.module('ngSignaturePad', []);
angular.module('ngSignaturePad').directive('signaturePad', [
  '$window',
  function ($window) {
    'use strict';
    var signaturePad, canvas, scope, element, EMPTY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';
    function calculateHeight($element) {
      return parseInt($element.css('height'), 10) - 70;
    }
    function calculateWidth($element) {
      return parseInt($element.css('width'), 10) - 25;
    }
    function setCanvasHeightAndWidth() {
      var height = calculateHeight(element), width = calculateWidth(element);
      scope.signatureWidth = width;
      scope.signatureHeight = height;
      canvas.attr('height', height);
      canvas.attr('width', width);
    }
    $window.addEventListener('resize', function () {
      scope.$apply(function () {
        var img = signaturePad.toDataURL();
        setCanvasHeightAndWidth();
        signaturePad.fromDataURL(img);
      });
    }, false);
    $window.addEventListener('orientationchange', function () {
      scope.$apply(function () {
        var img = signaturePad.toDataURL();
        setCanvasHeightAndWidth();
        signaturePad.fromDataURL(img);
      });
    }, false);
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'components/signature/signature.html',
      scope: {
        signature: '=signature',
        close: '&',
        clear: '&'
      },
      controller: [
        '$scope',
        function ($scope) {
          
          $scope.accept = function () {
            if (!signaturePad.isEmpty()) {
              $scope.signature.dataUrl = signaturePad.toDataURL();
              $scope.signature.$isEmpty = false;
            } else {
              $scope.signature.dataUrl = EMPTY_IMAGE;
              $scope.signature.$isEmpty = true;
            } 
            $scope.disableSubmit = true;
            
            $scope.disableSubmit = $scope.close();
          };
          $scope.erase = function() {
            signaturePad.clear();
          };          
          $scope.empty = function () {
            signaturePad.clear();
            $scope.clear();
          };
        }
      ],
      link: function ($scope, $element) {
        canvas = $element.find('canvas');
        scope = $scope;
        element = $element;
        signaturePad = new SignaturePad(canvas.get(0));
        setCanvasHeightAndWidth();
        if ($scope.signature && !$scope.signature.$isEmpty && $scope.signature.dataUrl) {
          signaturePad.fromDataURL($scope.signature.dataUrl);
        }
      }
    };
  }
]);