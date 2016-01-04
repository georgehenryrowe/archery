'use strict';

myApp.controller("MyCtrl1" ,function ($scope, UtilSrvc) {
	$scope.noOfArchers = 1;
	$scope.noOfTotalTargets = 0;
	$scope.archers = archers;
	$scope.started = 0;
    $scope.valueFromService = UtilSrvc.helloWorld("Amy");
    /*$scope.whosGo = function() {
    	if (archers[0].noOfTargets > archers[1].noOfTargets) {
    		ngClass =
    	}
    }*/
});

myApp.controller("MyCtrl2" ,function ($scope) {

});

// you may add more controllers below

var archers = [
		{
		name: "Archer 1",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
		{
		name: "Archer 2",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
		{
		name: "Archer 3",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
				{
		name: "Archer 4",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
				{
		name: "Archer 5",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
		{
		name: "Archer 6",
		noOfTargets: 0,
		lastScore: 0,
		totalScore: 0
		},
	];