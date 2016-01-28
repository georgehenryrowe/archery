'use strict';

myApp.controller("MyCtrl1" ,function ($scope, UtilSrvc, $localStorage, $sessionStorage) {

	// setting things up
	$scope.$storage = $localStorage;
	$scope.noOfArchers = 1;
	$scope.archers = archers;
	$scope.started = 0;

	$scope.addScore = function(archerNo, score) {
		// add score to the array of scores
		archers[archerNo].targetScores.push(score);
		// loop through array and add all the scores together
		archers[archerNo].totalScore = 0;
		for (var i = 0; i < archers[archerNo].targetScores.length; i++) {
			archers[archerNo].totalScore += archers[archerNo].targetScores[i];
		};
		// stringify data and add to local storage
		$localStorage['archers'] = JSON.stringify(archers);
	};

	$scope.deleteLastScore = function(archerNo) {
		// remove last score from array
		archers[archerNo].targetScores.pop();
		// add array back up again
		archers[archerNo].totalScore = 0;
		for (var i = 0; i < archers[archerNo].targetScores.length; i++) {
			archers[archerNo].totalScore += archers[archerNo].targetScores[i];
		};
	};

/*	$scope.checkLocalStorage = function() {
		if ($localStorage.archers.noOfTargets > 0) {
			var storedData = JSON.parse($localStorage['archers']);
			archers = storedData;
		};
	};*/

	$scope.clearLocalStorage = function() {
		$localStorage.$reset();
	};

    $scope.valueFromService = UtilSrvc.helloWorld("Amy");
});

myApp.controller("MyCtrl2" ,function ($scope) {

});

myApp.controller("MenuController", function ($scope, $route) {
	$scope.$route = $route;
})

// you may add more controllers below

var archers = [
		{
		name: "Archer 1",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
		{
		name: "Archer 2",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
		{
		name: "Archer 3",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
				{
		name: "Archer 4",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
				{
		name: "Archer 5",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
		{
		name: "Archer 6",
		// noOfTargets: 0,
		targetScores: [],
		totalScore: 0
		},
	];