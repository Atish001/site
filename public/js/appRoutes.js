angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})
		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'CityController'
		})

		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'	
		})

		.when('/theater',{
			templateUrl: 'views/theater.html',
			controller: 'TheaterController'
		})
		.when('/showtime',{
			templateUrl:'views/showtime.html',
			controller: 'ShowtimeController'
		});

	$locationProvider.html5Mode(true);

}]);