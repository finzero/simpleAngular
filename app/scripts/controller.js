app
.controller('HomeCtrl',['$scope',
	function($scope){
		console.info('this is home controller');
	}
])
.controller('Page1Ctrl',['$scope',
	function($scope){
		$scope.data = "ini adalah data dari controller";
		$scope.data_array = [
			{"nama" : "fazrin 1", "phone" : "12312312"},
			{"nama" : "fazrin 2", "phone" : "23123123"},
			{"nama" : "fazrin 3", "phone" : "623"},
			{"nama" : "fazrin 4", "phone" : "12312"},
			{"nama" : "fazrin 5", "phone" : "1239299"}
		];
	}
])
.controller('Page2Ctrl',['$scope',
	function($scope){
		console.info('this is page2 controller');
	}
]);