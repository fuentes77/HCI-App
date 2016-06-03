// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'pascalprecht.translate'])



.run(function($ionicPlatform, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if (typeof navigator.globalization !== "undefined") {
        navigator.globalization.getPreferredLanguage(function(language){ 
        $translate.use((language.value).split("-")[0]).then(function(data) {
            console.log("SUCCESS -> " + data);
        }, function(error) {
            console.log("ERROR -> " + error);
        
           });
        }, null);
    }

  });
})


.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  $translateProvider.translations('en', {
      nicht_regist: "Not registered?",
      goodbye_message: "Goodbye",
      regist: "Registration",
      login: "login",
      activities: "Activities",
      edit_c: "Edit course",
      ausp_auf: "Pronounce & record",
      friends: "Friends",
      music: "Music",
      vok_t: "Vocabulary training",
      gram_t: "Grammatic training",
      categ: "Categories",
      continue: "Continue course"
      
  });
  $translateProvider.translations('de', {
      nicht_regist: "Nicht registriert?",
      regist: "Registrierung",
      login: "Einloggen",
      activities: "Aktivitäten",
      edit_c: "Kurs bearbeiten",
      ausp_auf: "Ausprechen und aufnehmen",
      friends: "Freunde",
      music: "Musik",
      vok_t: "Vokabeln-Trainer",
      gram_t: "Grammatik üben",
      categ: "Kategorien",
      continue: "Continue course"
      
  });
  $translateProvider.preferredLanguage("en");
  $translateProvider.fallbackLanguage("en");

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'AbstractCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.dashSchueler', {
    url: '/dashSchueler',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/tab-dashSchueler.html',
        controller: 'DashStudCtrl'
      }
    }
  })

  .state('tab.vokabeln', {
    url: '/vokabeln',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/vokabeltrainer.html',
        controller: 'VokabelCtrl'
      }
    }
  }) 

  .state('tab.vokabelnProf', {
    url: '/vokabelnProf',
    views: {
      'tab-dash': {
        templateUrl: 'templates/vokabeltrainer.html',
        controller: 'VokabelCtrl'
      }
    }
  })

  .state('tab.musik', {
    url: '/musik',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/musik.html',
        controller: 'MusikCtrl'
      }
    }
  })  

  .state('tab.video', {
    url: '/video',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/video.html',
        controller: 'VideoCtrl'
      }
    }
  })   

  .state('tab.grammarHome', {
    url: '/grammarHome',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/tab-grammatik.html',
        controller: 'GrammarHomeCtrl'
      }
    }
  })    

  .state('tab.grammarHomeProf', {
    url: '/grammarHomeProf',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-grammatik-Prof.html',
        controller: 'GrammarHomeProfCtrl'
      }
    }
  })      

  .state('tab.grammarNoun', {
    url: '/grammarNoun',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/grammarNoun.html',
        controller: 'GrammarNounCtrl'
      }
    }
  })    

  .state('tab.grammarNounProf', {
    url: '/grammarNounProf',
    views: {
      'tab-dash': {
        templateUrl: 'templates/grammarNoun.html',
        controller: 'GrammarNounCtrl'
      }
    }
  })     

  .state('tab.grammarVerbProf', {
    url: '/grammarVerbProf',
    views: {
      'tab-dash': {
        templateUrl: 'templates/grammarVerb.html',
        controller: 'GrammarNounCtrl'
      }
    }
  })      
  
  .state('tab.grammarAdjektivProf', {
    url: '/grammarAdjektivProf',
    views: {
      'tab-dash': {
        templateUrl: 'templates/grammarAdjektiv.html',
        controller: 'GrammarNounCtrl'
      }
    }
  })      

  .state('tab.grammarVerb', {
    url: '/grammarVerb',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/grammarVerb.html',
        controller: 'GrammarVerbCtrl'
      }
    }
  })     

  .state('tab.grammarAdjektiv', {
    url: '/grammarAdjektiv',
    views: {
      'tab-dashSchueler': {
        templateUrl: 'templates/grammarAdjektiv.html',
        controller: 'GrammarAdjektivCtrl'
      }
    }
  })       

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })


  .state('tab.ubung', {
      url: '/ubung',
      views: {
        'tab-ubung': {
          templateUrl: 'templates/tab-ubung.html',
          controller: 'UbungCtrl'
        }
      }
    }) 

  .state('login', {
    url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'      

  })

.state('tab.dashSchueler-detail', {
    url: '/dashSchueler-detail',
    views: {
      'tab-dashSchueler-detail': {
        templateUrl: 'templates/dashSchueler-detail.html',
        controller: 'DashStudDetailCtrl'
      }
    }
  })


   ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
