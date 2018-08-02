// alert("hello");

var app = angular.module("myApp", ['ui.router']);

app.config(function ($stateProvider) {

    var homeState = {
        "name": 'home',
        url: '/home',
        templateUrl: './home.html',
        controller:"homeCtrl"
    }
    var contactState = {
        "name": 'contact',
        url: '/contact',
        templateUrl: './contact.html'
    }

    var emailState = {
        "name": 'email',
        url: '/contact',
        templateUrl: './email.html'
    }
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(emailState);

});

app.controller("homeCtrl",function($scope){
    $scope.name="Giri";

});