'use strict';

angular.module('storkApp')
  .controller('ExploreCtrl',['$scope','$timeout','commandsFact', function ($scope, $timeout, command) {

    // Use splice in order remove the first private _invalid command;
    var validCommands = Object.keys(command).splice(1);

    var beginMessage = 'Your adventure starts here';
    
    var continueMessage = 'Please enter a command, to continue';

    $scope.resultClass = '';
    // #RES I wanted to use this in the view's ng-pattern but it didn't work.
    $scope.validRegex = "/^"+Object.keys(command).join('|')+"/";

    $scope.response = beginMessage;

    var display = function(obj){

      $scope.response = obj.msg;

      $scope.responseClass = obj.cssClass;
      
      if(obj.revert){

        $timeout(function(){

          $scope.responseClass = '';

          $scope.response = continueMessage;

        },1500);

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

  }]);
