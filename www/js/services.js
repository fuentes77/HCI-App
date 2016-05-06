

var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY', function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback: 'JSON_CALLBACK',
  }, {
    get: {
      method: 'JSONP'
    }
  });

  return {
    getAtLocation: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    },
    getForecast: function(locationString) {
    },
    getHourly: function(locationString) {
    }
  }
}];