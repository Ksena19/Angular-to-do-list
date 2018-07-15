angular.module("myApp", [])
.controller('firstCtrl', function($scope){
    $scope.tempInput = 'this is your task';
    $scope.tasksArray = ['this task', 'second task'];

    $scope.addNew = function(){
    	if($scope.tempInput) {
    		$scope.tasksArray.push($scope.tempInput);
    	    $scope.tempInput = '';
    	} else {
    		console.log('The string is empty!');
    	}
    	
    }

    $scope.delete = function(item) {
    	var index = $scope.tasksArray.indexOf(item);
    	console.log(index);
    	$scope.tasksArray.splice(index, 1);
    }
});