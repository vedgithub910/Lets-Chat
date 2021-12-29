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
  room_name=localStorage.getItem("room_name");

  function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:username,message:msg,like:0
});
document.getElementById("msg").innerHTML="";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
myname="<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
mymsg="<h4 class='message_h4'>"+message+"</h4>";
mybtn="<button  class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update(this.id)'>";
thumbs="<span class='glyphicon glyphicon-thumbs-up'>LIKE: " +like+ "</span></button><hr>";
total=myname+mymsg+mybtn+thumbs;
document.getElementById("output").innerHTML+=total;
//End code
 } });  }); }
getData();
function update(message_id){
console.log("Like Button Clicked "+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
  like:updated_likes
});
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("un");
  window.location="index.html";
  }