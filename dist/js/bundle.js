'use strict';

angular.module('routesApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html'
    }).state('routes', {
        url: '/routes',
        templateUrl: '../views/routes.html',
        controller: 'mainCtrl'
    }).state('more', {
        url: '/more',
        templateUrl: './views/more.html'

    });
});
// 200069508-bf86aa531f568aff3a52cb57d1fd452d
"use strict";
'use strict';

angular.module('routesApp').controller('mainCtrl', function ($scope, mainSvc) {

    $scope.recRoutes = function () {
        mainSvc.getRoutes().then(function (response) {
            $scope.routes = response.data.routes;
            console.log($scope.routes);
        });
    };
    $scope.recRoutes();

    //    $scope.typeInProcess = false;

    // $scope.typeInProcess= function() {      
    //   $scope.typeInProcess = true;
    // };
});
'use strict';

angular.module('routesApp').service('mainSvc', function ($http) {

    this.getRoutes = function () {
        return $http.get('https://www.mountainproject.com/data?action=getRoutes&routeIds=106006593,106838391,109711611,107185544,106497933,108184604,108955192,108955188,110374423,107736171,109055762,106822406,106645813,107102098,107102520&key=200069508-bf86aa531f568aff3a52cb57d1fd452d');
    };
});
//# sourceMappingURL=bundle.js.map
