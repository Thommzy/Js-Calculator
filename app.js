var app = angular.module("calculatorApp", []);
app.controller("calculatorCtrl", calc);

function calc($scope) {
    $scope.display = "";

    $scope.math = function (val){
        $scope.display += val;
    };

    $scope.c = function (val){
        $scope.display = val;
    };

    $scope.e = function (val){
        $scope.display = eval($scope.display);
    };

}