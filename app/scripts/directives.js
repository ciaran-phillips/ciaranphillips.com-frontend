var myApp = angular.module('ciaranphillipscomApp.directives',[]);

myApp.directive("scrollTo", function() {
	return {
		link: function(scope, elm, attrs) {
			elm.bind('click', function() {
				var target = attrs.scrollTo;
				jQuery.scrollTo("#" + target, {
					duration: 500,
					offset: -80
				});
			});
		}
	};
});
myApp.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});
myApp.directive("flexslider", function() {
	return {
		link: function(scope, elm, attrs) {
			scope.$on("ngRepeatFinished",function(e) {
				$(elm).flexslider();
			});
			
		}
	};
});
myApp.directive("responsiveImage", function() {
	return {
		link: function(scope, elm, attrs) {
			scope.$on("ngRepeatFinished",function(e) {
				$(elm).hisrc();
			});
		}
	};
});

