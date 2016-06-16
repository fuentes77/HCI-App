angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'lehrer' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            }
            if (name == 'schueler' && pw == 'schueler') {
                deferred.resolve('Welcome ' + name + '!');
            }
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Mohammed Arahrad',
    lastText: 'Sorry I dont understand',
    face: 'img/Mohammed.jpg'
  }, {
    id: 1,
    name: 'Beshr Sedik',
    lastText: 'Hallo hallo Freund',
    face: 'img/Beshr.png'
  }, {
    id: 2,
    name: 'Ahmed Khadik',
    lastText: 'wie gehts dir?',
    face: 'img/ahmed.jpg'
  }, {
    id: 3,
    name: 'Maadhin Galil',
    lastText: 'treffen nachste Woche? :)))))',
    face: 'img/Maadhin.jpg'
  }, {
    id: 4,
    name: 'Kemal Bülbül',
    lastText: 'This is wicked good ice cream.',
    face: 'img/Kemal.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
