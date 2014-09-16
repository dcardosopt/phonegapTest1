var app = angular.module('App5', [
    'ngRoute',
    'ngTouch',
    'mobile-angular-ui',
    'InitCordova'
]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'pages/home.html'});
    $routeProvider.when('/page2', {templateUrl: 'pages/page2.html'});
});

app.controller('MainController', function ($rootScope, $scope) {

    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false;
    });

    var scrollItems = [];

    for (var i = 1; i <= 10; i++) {
        scrollItems.push("Item " + i);
    }

    $scope.scrollItems = scrollItems;
    $scope.invoice = {payed: true};
    $scope.userAgent = navigator.userAgent;

    $scope.chatUsers = [
        { name: "Carlos  Flowers", online: true },
        { name: "Byron Taylor", online: true },
        { name: "Jana  Terry", online: true },
        { name: "Darryl  Stone", online: true },
        { name: "Fannie  Carlson", online: true },
        { name: "Holly Nguyen", online: true },
        { name: "Bill  Chavez", online: true },
        { name: "Veronica  Maxwell", online: true },
        { name: "Jessica Webster", online: true }
    ];


    var options = { limit: 1 };


    $scope.startRecord = function () {
        navigator.device.capture.captureVideo(captureSuccess, captureError, options);

        //navigator.camera.getPicture(captureSuccess, captureError, options);
    };

    // capture callback
    var captureSuccess = function (mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            console.log("Success");
            alert("Success");
        }
    };

    // capture error callback
    var captureError = function (error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

});