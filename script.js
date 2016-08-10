var myApp = angular.module("myModule",[])
           .controller("myController",function($scope,stringService){
              $scope.transformstring = function(input){
                  $scope.output = stringService.processString(input);
              }
           });