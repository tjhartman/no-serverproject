angular.module('routesApp', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/')

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html'
        })
        .state('routes', {
            url: '/routes',
            templateUrl: '../views/routes.html',
            controller: 'mainCtrl'
        })
        .state('more', {
            url: '/more',
            templateUrl: './views/more.html',

        })


    })