'use strict';

var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/Scoreboard', 
    	{
    		templateUrl: 'partials/archery_main.html', 
    		controller: 'MyCtrl1',
            activetab: 'Scoreboard'
    	});
    $routeProvider.when(
    	'/About', 
    	{
    		templateUrl: 'partials/about.html', 
    		controller: 'MyCtrl2',
            activetab: 'About'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/Scoreboard'
        });
});
