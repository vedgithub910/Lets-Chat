
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBU0Qty6SGQD3v6lhEN84c27KFvEqVgm6o",
      authDomain: "chatbook-d452a.firebaseapp.com",
      databaseURL: "https://chatbook-d452a-default-rtdb.firebaseio.com",
      projectId: "chatbook-d452a",
      storageBucket: "chatbook-d452a.appspot.com",
      messagingSenderId: "943607436023",
      appId: "1:943607436023:web:f8de4b65d2c812fa72b9f2"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("un");
document.getElementById("user").innerHTML="Welcome "+username+" !";
function add(){
room_name=document.getElementById("roomname").value;
firebase.database().ref("/").child(room_name).update({
purpose:"Adding Room"      
});
localStorage.setItem("room_name",room_name);
window.location="chat.html"; 
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
x="<div class='room_name' id="+Room_names+" onclick='takeme(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=x;
      //End code
      });});}
getData();


function takeme(name){
localStorage.setItem("room_name",name);
window.location="chat.html";
}
function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("un");
window.location="index.html";
}