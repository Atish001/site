sampleApp.controller('TheaterController', function($scope, $http, $log) {

    $scope.tagline = 'Book your theater here!';
    $scope.booking = 'booking';

var loadCities = function(){
    $http.get('/city/getCity').success(function(response){
        console.log('Read is success');
        $scope.cityList = response;
        $scope.city = "";
    });
};
loadCities();
var loadMovies = function(){
    $http.get('/movie/getMovie').success(function(response){
        console.log('Read is success');
        $scope.moviList = response;
        $scope.movi = "";
    });
};
loadMovies();
    var refresh = function() {
        $http.get('/theater/getTheater').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.theaterList = response;
            $scope.theater = "";
        });
    };


    refresh();

    $scope.addTheater = function(theater) {
    
            $http({
                    method: 'POST',
                    url: '/theater/addTheater',
                     headers: {'Content-Type': 'application/json'},    
                    data: theater
                })
                .then(function(response) {
                    console.log(response);
                    console.log("CREATE IS SUCCESSFUL");
                    refresh();
                });

        console.log($scope.contact);

    };

    $scope.removeTheater = function(theater) {
        //console.log(id);
        $http.delete('/theater/deleteTheater/' + theater._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editTheater = function(theater) {
        $http.get('/theater/getTheater/' + theater._id).success(function(response) {
            $scope.theater = response[0];
        });
    };

    $scope.updateTheater = function() {
        console.log("REACHED UPDATE");
        console.log($scope.theater._id);
        $http.put('/theater/updateTheater/' + $scope.theater._id, $scope.theater).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});