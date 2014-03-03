'use strict';

angular.module('chatFirebaseApp', ['firebase'])
  .controller('MainCtrl', function ($scope, $firebase) {
  var ref = new Firebase('https://myfirstapp12345.firebaseio.com/');
        $scope.messages = $firebase(ref);
        $scope.addMessage = function(e){

            //this checks to make sure that the keydown is on the enter button (#13)
            if(e.keyCode !== 13){
                return;
            }
            $scope.messages.$add({
                body: $scope.newMessage
            });
            console.log("messages")
            $scope.newMessage = '';
        }
  });
