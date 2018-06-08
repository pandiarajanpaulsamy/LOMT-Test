angular.module('UserManagementApp', ['UserManagementApp.controllers']);
angular.module('UserManagementApp.controllers', []).controller('userController', function($scope) {
    $scope.objectIndex = '';
    $scope.userList = [
        {
            Name :"Frank",
            Role : "Manager"
        }];
    // update action
    $scope.edit = function(id) {
        $scope.objectIndex = id;
        $scope.userObject = angular.copy($scope.userList[id]);
    }
    // Save action
    $scope.save = function() {
        if($scope.userList[$scope.objectIndex] == null) {
            $scope.userList.push($scope.userObject);
        } else {
            $scope.userList[$scope.objectIndex] = $scope.userObject;
        }
        $scope.userObject = {};
        $scope.objectIndex = '';
    }
    //Delete action
    $scope.delete = function() {
        $scope.userList.splice($scope.objectIndex,1);
        $scope.userObject.Name ='';
        $scope.userObject.Role ='';
    }
    //Delete action using id
    $scope.deleteBasedOnId = function(id) {        
        $scope.userList.splice(id,1);
        $scope.userObject.Name ='';
        $scope.userObject.Role ='';
    }

});