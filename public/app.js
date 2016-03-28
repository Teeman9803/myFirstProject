(function(){

	'use strict';

	angular.module('budgetApp', [		
		// 'ngSanitize',		
		// 'angularMoment',
		// 'ngAnimate',
		// 'ngResource',
		// 'angular-loading-bar',
		// 'mgcrea.ngStrap',		
		// 'angular-growl',
		// 'ngTagsInput',
		'ui.router',
		// 'angular.filter'		
	])
	.config(config)

	function config($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('accounts', {
			url : '/',
			templateUrl : 'app/accounts/budgetapp-accounts.html'
		});
		
	
		/*	moment.locale('en', {
			    relativeTime : {
			        future: "in %s",
			        past:   "%s",
			        s:  "%ds",
			        m:  "1m",
			        mm: "%dm",
			        h:  "1h",
			        hh: "%dh",
			        d:  "1d",
			        dd: "%dd",
			        M:  "1m",
			        MM: "%dm",
			        y:  "1y",
			        yy: "%dy"
			    }
			});
			tagsInputConfigProvider
				.setDefaults('tagsInput', {
					placeholder : "Add Flag",
					addOnEnter : true,
					addOnComma : true,
					addOnPaste : true,
					addOnBlur : true				
				}); */
	}
	
}());
