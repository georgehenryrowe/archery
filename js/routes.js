'use strict';

var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider) {
    $routeProvider.when(
    	'/Scoreboard', 
    	{
    		templateUrl: 'partials/archery_main.html', 
    		controller: 'MyCtrl1'
    	});
    $routeProvider.when(
    	'/About', 
    	{
    		templateUrl: 'partials/about.html', 
    		controller: 'MyCtrl2'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/Scoreboard'
        });
});
