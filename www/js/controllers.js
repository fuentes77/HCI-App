angular.module('starter.controllers', [])



.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};

  $scope.login = function() {
      LoginService.loginUser($scope.data.benutzer, $scope.data.passwort).success(function(data) {

        if ($scope.data.benutzer == 'lehrer'){
          $state.go('tab.dash');
        }
        if ($scope.data.benutzer == 'schueler'){
          $state.go('tab.dashSchueler');
        }
      }).error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
          });
      });
  }
})



.controller('AbstractCtrl', function($scope) {
  $scope.dash = {};
  $scope.prof = "ng-show";
  $scope.student = "ng-show";

  $scope.hideView = function(view) {
    if (view == "prof") {
      $scope.prof = "ng-hide";
      $scope.student = "ng-show";
    }
    else if (view == "student") {
      $scope.prof = "ng-show";
      $scope.student = "ng-hide";
    }
  };
})



.controller('DashCtrl', function($scope, $stateParams) {
  $scope.dash = {};
  $scope.hideView("student");
})



.controller('DashStudCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};
  $scope.hideView("prof");
})



.controller('VokabelCtrl', function($scope, $stateParams, $rootScope, $controller, $ionicHistory) {
  $scope.dash = {};

  $scope.smallTalkContainer = [
        {english:'How are you?',german:'Wie geht es dir?'},
        {english:'What is your name?',german:'Wie heisst du?'},
        {english:'My name is ...',german:'Ich heisse ...'},
        {english:'What time is it?',german:'Wie spät ist es?'}
  ];

  $scope.animalContainer = [
        {english:'dog',german:'Hund'},
        {english:'cat',german:'Katze'},
        {english:'mouse',german:'Maus'},
        {english:'elephant',german:'Elefant'}
  ];

  $scope.smallTalk = false;   
  $scope.animals = false;
  $scope.arrowSmallTalk = "ion-chevron-right"; 
  $scope.arrowAnimal = "ion-chevron-right"; 

  $scope.changeArrow = function (section, value) {
    switch (section) {
      case "smallTalk": {
        if (value) {
          $scope.arrowSmallTalk = "ion-chevron-down";}
        else {
          $scope.arrowSmallTalk = "ion-chevron-right";
        } 
        break;
      }
      case "animals": {
        if (value) {
          $scope.arrowAnimal = "ion-chevron-down";}
        else {
          $scope.arrowAnimal = "ion-chevron-right";
        } 
        break;
      }
    }
  };

  $scope.checkState = function() {
    if ($ionicHistory.currentStateName() == 'tab.vokabelnProf') {
      return true;
    }
  };

  $scope.newWordST = {english:'', german:''};
  $scope.newWordA = {english:'', german:''};

  $scope.addNewWord = function (section) {
    // var item = {english:$scope.newWordST.english, german:$scope.newWordST.german};
    switch (section) {
      case "smallTalk": {
        var item = {english:$scope.newWordST.english, german:$scope.newWordST.german};
        $scope.smallTalkContainer.push(item);
        $scope.newWordST = {english:'', german:''};
        break;
      }
      case "animals": {
        var item = {english:$scope.newWordA.english, german:$scope.newWordA.german};
        $scope.animalContainer.push(item);
        $scope.newWordA = {english:'', german:''};
        break;
      }
    }
  };
})



.controller('MusikCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  $scope.langLearnCont = [
        {src:'img/ABC.png', name:'German for Beginners', title:'Alphabet and Phonetics'},
        {src:'img/numbers.jpg', name:'LEARN GERMAN', title: 'NUMBERS'}
  ];

  $scope.entertainCont = [
        {src:'img/falco.jpg', name:'Falco', title:'Wiener Blut'},
        {src:'img/kassette.jpg', name:'HoerTalk', title:'Centralia'}
  ];  
})



.controller('VideoCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  $scope.langLearnCont = [
        {src:'img/lesson1.jpg', name:'Learn German', title:'Lesson 1'},
        {src:'img/prepositions.jpg', name:'Easy German Grammar', title: 'Prepositions'}
  ];

  $scope.entertainCont = [
        {src:'img/loriot.jpg', name:'Loriot', title:'Das Bild hängt schief'},
        {src:'img/goethe_institut.png', name:'BBC and Goethe Institute', title:'Susanne - for German learners'}
  ];    
})



.controller('GrammarHomeCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

})



.controller('GrammarHomeProfCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};
    
})



.controller('GrammarNounCtrl', function($scope, $stateParams, $rootScope, $controller, $ionicHistory) {
  $scope.dash = {};

  $scope.maskulinContainer = [
        {case:'Nominativ', singular:'der Mann', plural:'die Männer'},
        {case:'Genitiv', singular:'des Mannes', plural:'der Männer'},
        {case:'Dativ', singular:'dem Mann', plural:'den Männern'},
        {case:'Akkusativ', singular:'den Mann', plural:'die Männer'}
  ];

  $scope.femininContainer = [
        {case:'Nominativ', singular:'die Frau', plural:'die Frauen'},
        {case:'Genitiv', singular:'der Frau', plural:'der Frauen'},
        {case:'Dativ', singular:'der Frau', plural:'den Frauen'},
        {case:'Akkusativ', singular:'die Frau', plural:'die Frauen'}        
  ];  

  $scope.neutrumContainer = [
        {case:'Nominativ', singular:'das Kind', plural:'die Kinder'},
        {case:'Genitiv', singular:'des Kindes', plural:'der Kinder'},
        {case:'Dativ', singular:'dem Kind', plural:'den Kindern'},
        {case:'Akkusativ', singular:'das Kind', plural:'die Kinder'}        
  ];  

  $scope.checkState = function() {
    console.log($ionicHistory.currentStateName());
    if ($ionicHistory.currentStateName() == 'tab.grammarNounProf') {
      return true;
    }
  }; 

  $scope.newWordM = {case:'', singular:'', plural:''};
  $scope.newWordF = {case:'', singular:'', plural:''};
  $scope.newWordN = {case:'', singular:'', plural:''};  

  $scope.addNewWord = function (section) {
    // var item = {english:$scope.newWordST.english, german:$scope.newWordST.german};
    switch (section) {
      case "maskulin": {
        var item = {case:$scope.newWordM.case, singular:$scope.newWordM.singular, plural:$scope.newWordM.plural};
        $scope.maskulinContainer.push(item);
        $scope.newWordM = {case:'', singular:'', plural:''};
        break;
      }
      case "feminin": {
        var item = {case:$scope.newWordF.case, singular:$scope.newWordF.singular, plural:$scope.newWordF.plural};
        $scope.femininContainer.push(item);
        $scope.newWordF = {case:'', singular:'', plural:''};
        break;
      }
      case "neutrum": {
        var item = {case:$scope.newWordN.case, singular:$scope.newWordN.singular, plural:$scope.newWordN.plural};
        $scope.neutrumContainer.push(item);
        $scope.newWordN = {case:'', singular:'', plural:''};  
        break;
      }      
    }
  };     
})



.controller('GrammarNounProfCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  // $scope.maskulinContainer = [
  //       {case:'Nominativ', singular:'der Mann', plural:'die Männer'},
  //       {case:'Genitiv', singular:'des Mannes', plural:'der Männer'},
  //       {case:'Dativ', singular:'dem Mann', plural:'den Männern'},
  //       {case:'Akkusativ', singular:'den Mann', plural:'die Männer'}
  // ];

  // $scope.femininContainer = [
  //       {case:'Nominativ', singular:'die Frau', plural:'die Frauen'},
  //       {case:'Genitiv', singular:'der Frau', plural:'der Frauen'},
  //       {case:'Dativ', singular:'der Frau', plural:'den Frauen'},
  //       {case:'Akkusativ', singular:'die Frau', plural:'die Frauen'}        
  // ];  

  // $scope.neutrumContainer = [
  //       {case:'Nominativ', singular:'das Kind', plural:'die Kinder'},
  //       {case:'Genitiv', singular:'des Kindes', plural:'der Kinder'},
  //       {case:'Dativ', singular:'dem Kind', plural:'den Kindern'},
  //       {case:'Akkusativ', singular:'das Kind', plural:'die Kinder'}        
  // ];    
})



.controller('GrammarVerbCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  $scope.regularContainer = [
        {person:'ich', indikativ:'winke', konjunktiv:'winkte'},
        {person:'du', indikativ:'winkst', konjunktiv:'winktest'},
        {person:'er/sie/es', indikativ:'winkt', konjunktiv:'winkte'},
        {person:'wir', indikativ:'winken', konjunktiv:'winkten'},
        {person:'ihr', indikativ:'winkt', konjunktiv:'winktet'},        
        {person:'sie', indikativ:'winken', konjunktiv:'winkten'}
  ];

  $scope.irregularContainer = [
        {person:'ich', indikativ:'gehe', konjunktiv:'ginge'},
        {person:'du', indikativ:'gehst', konjunktiv:'gingest'},
        {person:'er/sie/es', indikativ:'geht', konjunktiv:'ginge'},
        {person:'wir', indikativ:'gehen', konjunktiv:'gingen'},
        {person:'ihr', indikativ:'geht', konjunktiv:'ginget'},        
        {person:'sie', indikativ:'gehen', konjunktiv:'gingen'}      
  ];  
})



.controller('GrammarAdjektivCtrl', function($scope, $stateParams, $rootScope, $controller) {
  $scope.dash = {};

  $scope.regularContainer = [
        {positiv:'lieb', komparativ:'lieber', superlativ:'am liebsten'},
        {positiv:'schnell', komparativ:'schneller', superlativ:'am schnellsten'},
        {positiv:'einsam', komparativ:'einsamer', superlativ:'am einsamsten'}
  ];

  $scope.irregularContainer = [
        {positiv:'gut', komparativ:'besser', superlativ:'am besten'},
        {positiv:'viel', komparativ:'mehr', superlativ:'am meisten'},
        {positiv:'gerne', komparativ:'lieber', superlativ:'am liebsten'}
  ];  
})



.controller('DashStuddetailCtrl', function($scope ,$stateParams) {
  console.log("hola")
})



.controller('tabCtrl', function($scope) {
  $scope.dash = {};
  $scope.dash.st = true;
  $scope.dash.profTab = false;
})



.controller('ChatsCtrl', function($scope, Chats) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})



.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
