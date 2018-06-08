describe('User Management App Unit Testing', function () {
		
	beforeEach(angular.mock.module('UserManagementApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    describe('Check controller is defined', function () {
		it('should test Controller is defined', function () {
			var $scope = {};
			var controller = $controller('userController', { $scope: $scope });			
			expect(controller).toBeDefined();
    	});    
    });
  
	describe('save action', function () {
		it('should test user list is added while submiting with user name and role', function () {
			var $scope = {};
			var controller = $controller('userController', { $scope: $scope });
			$scope.userList.Name = "Ram";
			$scope.userList.Role = "Team Lead";
			$scope.save();
			expect($scope.userList.length).toBe(2);
    	});    
    });

    describe('Edit action', function () {
		it('should test user edit function based on index', function () {
			var $scope = {};
			var controller = $controller('userController', { $scope: $scope });
			var id =1;
            $scope.edit(id);
			expect(id).toEqual(1);
    	});    
      });

    describe('delete action', function () {
		it('should test user delete function based on index', function () {
            var $scope = {};
            $scope.userObject ={};
			var controller = $controller('userController', { $scope: $scope });
			var id =2;
            $scope.delete(id);
			expect(id).toEqual(2);
    	});    
    });
});