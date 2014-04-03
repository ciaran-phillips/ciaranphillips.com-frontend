'use strict';
angular.module('ciaranphillipscomApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ciaranphillipscomApp.directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/post/:postId', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });;
