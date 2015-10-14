'use strict';

angular.module('myApp',['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'app/app.html',
          controller: 'AppCtrl'
      })
      .state('sub', {
          url: '/sub',
          templateUrl: 'app/sub.html',
          controller: 'AppCtrl'
      });

}).run(function () {

});
