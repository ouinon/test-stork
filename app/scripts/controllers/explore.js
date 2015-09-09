'use strict';

angular.module('storkApp')
.controller('ExploreCtrl',['$scope','$timeout','commandsFact', function ($scope, $timeout, command) {

    var display = function(obj){

        $scope.response = obj.msg;

        $scope.resultClass = obj.cssClass;

        console.log(obj.cssClass);

        if(obj.revert){

            $timeout(function(){

                $scope.resultClass = '';

                $scope.response = continueMessage;

            },2000);

        }else{

        // If it's valid you can reset the input message
            $scope.message = '';
        }

    };

    $scope.explore = function(message){

        message = message.toLowerCase();

        var messageArr = message.split(' ');

        var verb = messageArr[0];

        // If the command isn't recognised
        if(!command[verb]){

            var displayObj = command['_invalid'](validCommands);

        }else{

            var displayObj = command[verb](messageArr.splice(1));

        }

        display(displayObj);

    };

    var validCommands = Object.keys(command).splice(1);

    var continueMessage = 'Please enter a command, to continue...';

    var init = (function(){

        var beginMessage = 'Your adventure starts here';

        $scope.resultClass = '';
        // #RES I wanted to use this in the view's ng-pattern but it didn't work.
        $scope.validRegex = "/^"+Object.keys(command).join('|')+"/";

        $scope.response = beginMessage;

    })();


}]);
