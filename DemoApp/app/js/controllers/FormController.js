/**
 * Form controller
 */
'use strict';

eventsApp.controller('FormController', function FormController($scope){
    $scope.sampleInput = "";
    $scope.sampleInput2 = "";

    $scope.checkForm = function() {
        var sampleInputVal = parseInt($scope.sampleInput);
        var sampleInput2Val = parseInt($scope.sampleInput2);
        validateForm(sampleInputVal, sampleInput2Val);
    };

    function validateForm(input1Value, input2Value){
        $scope.formSampleForm.$valid = true;
        validateInput1(input1Value, input2Value);
        validateInput2(input2Value);
    };

    function validateInput1(input1Value, input2Value){
        if (input1Value < 1 || input1Value > 100) {
            $scope.formSampleForm.$valid = false;
            return
        }

        if (input1Value >= input2Value){
            $scope.formSampleForm.$valid = false;
        }
    }

    function validateInput2(input2Value){
        if (input2Value < 1 || input2Value > 100) {
            $scope.formSampleForm.$valid = false;
        }
    }
});