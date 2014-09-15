angular.module('App5.controllers.Main', [
    'App5.controllers.Home'
])

    .controller('mainCtrl', function ($scope) {

        $scope.title = "MainCtrl!";

    });