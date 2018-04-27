var app = angular.module("calculatorApp", []);
app.controller("calculatorCtrl", calc);

function calc($scope) {
    $scope.display = "";
    $scope.press=false;

    $scope.math = function (val){
        if($scope.press == true){
            clear();
        }

        $scope.display += val;
    };

    function clear() {
        $scope.display="";
        $scope.press=false;
    }

    $scope.c = function (val){
        $scope.display = val;

    };

    $scope.e = function (val){
        $scope.press=true;
        $scope.display = eval($scope.display);
    };

}