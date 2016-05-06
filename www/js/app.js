// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



// Hier befinden sich die Definitionen der Tabs (URLs) und wie sie
// zugänglich sind
.config(function($stateProvider, $urlRouterProvider) { 


$stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    .state('tab.index', {
      url: '/index',
      views: {
        'home-tab': {
          templateUrl: 'index.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tab.tab-cities', {
      url: '/tab-cities',
      views: {
        'tab-cities': {
          templateUrl: 'tab-cities.html',
          controller: 'CitiesCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/index');
})



//  Folgender Code enthält die Main-Funktionen (Api-Abruf/Json, Variablen-Ausgaben)

.controller("HomeCtrl", ["$scope","$http","$location", "$state",
  function($scope, $http, $location, $state) {

    $scope.submitCity = function(city){
      $http.get("http://api.openweathermap.org/data/2.5/weather?APPID=6982e2a996f299dd990bcdf33edfa2f7&q="+ city,
         { params: { "key1": "value1", "key2": "value2", "key3": "value3" } })
            .success(function(data) {
                console.log(data.main.temp);
                $scope.temp = (data.main.temp - 273.15).toFixed(2);
                $scope.humidity = data.main.humidity;
                $scope.weatherIcon = data.weather.icon;
                // $state.go('tab.tab-cities'); 
                // $window.location.reload(true);

            })
            .error(function(data) {
                alert("Something went wrong");
            });
    }

}]);

//  Folgender Code ist zu der Implementierung der 2. Tab. gedacht,
    // leider ohne Erfolg



// .controller("CitiesCtrl", ["$scope","$http","$location", $state, 
//    function($scope, $http, $location) {

//     $scope.submitCity = function(city){
                // $state.go('tab.tab-cities'); 
                // $state.go('tab.index'); 
                // $window.location.reload(true);

//             })
//             .error(function(data) {
//                 alert("Something went wrong");
//             });
//     }

// }])