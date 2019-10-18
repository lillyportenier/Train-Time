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
var time;
var frequency;

 function submit(event){
    event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    time = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(name);

    // database.ref().push({
    //     namefb: name,
    //     destinationfb: destination,
    //     timefb: time,
    //     frequencyfb: frequency,
    // });
    
};
// database.ref().on("child")


$(document).on("click", "#submit-button", function(event) {
    event.preventDefault();
    search(event);   
   });

$(document).keypress(function(event) {
    if (event.keyCode == 13) {   
        submit(event);   
    }
});
