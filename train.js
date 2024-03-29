var config = {
    apiKey: "AIzaSyDcWL8DBzsssPi4MsXg6w-5tRHfXopRnHw",
    authDomain: "train-timer-cce42.firebaseapp.com",
    databaseURL: "https://train-timer-cce42.firebaseio.com",
    projectId: "train-timer-cce42",
    storageBucket: "train-timer-cce42.appspot.com",
    messagingSenderId: "555289134308",
    appId: "1:555289134308:web:1f86683b1cf4bf066dd8f1"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var name;
var destination;
var time;
var frequency;


 $("#submit-button").on("click",function (event){
    event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    time = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    // console.log(name);

    database.ref().push({
        namefb: name,
        destinationfb: destination,
        timefb: time,
        frequencyfb: frequency,
        minutesfb: firebase.database.ServerValue.TIMESTAMP

    });

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

    
});
database.ref().on("child_added", function(snapshot){
    var snap = snapshot.val();
    var trainFrequency = snap.frequencyfb;
    console.log(trainFrequency)
    var firstTime = snap.timefb;


    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    var diffTime =  currentTime.diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFRENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment(currentTime).add(tMinutesTillTrain, "minutes");
    console.log("ARIVAL TIME: " + moment(nextTrain).format("HH:mm"));




    console.log(firstTimeConverted);
  
    // console.log(snap.namefb);
    // console.log(snap.destinationfb);
    // console.log(snap.timefb);
    // console.log(snap.frequencyfb);

    $(".table").append("<tr><td>" + snap.namefb + "</td><td>" + snap.destinationfb + "</td><td>" +
    snap.frequencyfb + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");



})


// $(document).on("click", "#submit-button", function(event) {
//     event.preventDefault();
//     search(event);   
//    });

// $(document).keypress(function(event) {
//     if (event.keyCode == 13) {   
//         submit(event);   
//     }
// });
