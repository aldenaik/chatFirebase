'use strict';


//messages = threads    Message = Thread

angular.module('chatFirebaseApp', ['firebase'])
    .controller('ThreadCtrl', function ($scope, $firebase) {
        var ref = new Firebase('https://myfirstapp12345.firebaseio.com/threads');
        $scope.threads = $firebase(ref);
        $scope.currentThread;

        $scope.addThread = function(e){

            //this checks to make sure that the keydown is on the enter button (#13)
            if(e.keyCode !== 13){
                return;
            }
            $scope.threads.$add({body: $scope.newThread});
            $scope.newThread = '';
        }// end add thread



        $scope.changeThread= function(id){
            var threadRef = new Firebase('https://myfirstapp12345.firebaseio.com/threads/'+id);
            $scope.currentThread = $firebase(threadRef);
            $scope.replies = $scope.currentThread.$child('replies');
        }// end Change Thread




          $scope.addReply = function(e){
//              var thread = $firebase(new Firebase('https://myfirstapp12345.firebaseio.com/threads/'+id));
              if(e.keyCode !== 13){
               return;
            }
            $scope.replies.$add($scope.newReply);
            $scope.newReply = '';
        }// end addReply


}); // end controller

