'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMessages']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'components/home/home.html',
        contoller   : 'HomeController'
    })
    .when('/feature', {
        templateUrl : 'components/feature/feature.html',
        controller  : 'FeatureController'
    })
    .otherwise({redirectTo: '/'});
});
