'use strict';
var myMod = angular.module('ciaranphillipscomApp');

myMod.controller('MainCtrl', ["$scope","$http","$sce","$location",function ($scope,$http,$sce,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $http({method:"GET", url:"/cms/api.php?req=posts"})
    	.success(function(data, status, headers, config) {
    		$scope.posts = data;
    		
    		console.log($scope.posts);
    }).error(function(data, status, headers, config){
    	console.log(data);
    });
    $http({method:"GET", url:"/cms/api.php?req=post"})
    	.success(function(data, status, headers, config) {
    		$scope.post = data;
    		
    }).error(function(data, status, headers, config){
    	console.log(data);
    });
    
    $http({method:"GET", url:"/cms/api.php?req=projects"})
    	.success(function(data, status, headers, config){
    		$scope.projects = data;
    		console.log(data);
    	}).error(function(data, status, headers, config){
    		console.log(data);
    	});
    
    $scope.to_trusted = function(html_code) {
	    return $sce.trustAsHtml(html_code);
	};
	$scope.go = function ( path ) {
	  $location.path( path );
	};
    
    
  }]);
  
  

myMod.controller('PostCtrl', ["$scope","$http","$routeParams","$sce",function ($scope,$http, $routeParams, $sce) {
	$scope.postId = $routeParams.postId;
	
	$http({method:"GET", url:"/cms/api.php?req=post&id=" + $scope.postId})
    	.success(function(data, status, headers, config) {
    		$scope.post = data;
    		console.log(data);
    		
    }).error(function(data, status, headers, config){
    	console.log(data);
    });
    
    $scope.to_trusted = function(html_code) {
	    return $sce.trustAsHtml(html_code);
	};
}]);
