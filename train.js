var Config = {
    apiKey: "AIzaSyBylhZQJQCK2L0Oix1UydONWusQtfPmHL8",
    authDomain: "train-timer-4339a.firebaseapp.com",
    databaseURL: "https://train-timer-4339a.firebaseio.com",
    projectId: "train-timer-4339a",
    storageBucket: "train-timer-4339a.appspot.com",
    messagingSenderId: "218816803986",
    appId: "1:218816803986:web:a6bf31a86096e5e597e24b"
  };
  firebase.initializeApp(Config);

  var database = firebase.database();

var name;
var destination;
var trainTime;
var frequency;

$("#submit-button").on("click", function(event){
    event.preventDefault();
    
})