describe('userController function', function() {
	describe('userController', function() {
	  var $scope, userManagementController;
	  var mock = [
		{
		  "Name":"frank",
		  "Role":"team lead"
		},
		{
		  "Name":"sam",
		  "Role":"manager"
		}
	  ];
	  beforeEach(module('UserManagementApp'));
  
	  beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		userManagementController = $controller('userController', {
		  $scope: $scope 
		});
		$scope.userObject = mock;
	  }));
	  
	 /* it("should check controller is defined or not", function () {
		  expect(userManagementController).toBeDefined();
	  });*/
  });
});