
const firebaseConfig = {
    apiKey: "AIzaSyApTYf8jt4LXiPZQGJUgp4sNqrjClXv6fM",
    authDomain: "project-94-695d2.firebaseapp.com",
    databaseURL: "https://project-94-695d2-default-rtdb.firebaseio.com",
    projectId: "project-94-695d2",
    storageBucket: "project-94-695d2.appspot.com",
    messagingSenderId: "115470200430",
    appId: "1:115470200430:web:afb9bbd3c9aca305d5c07f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "to add the user"



  });

  localStorage.setItem("room_name", room_name);
  window.location = "letschat_page.html";

}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();


function addUser (){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "LetsChat_room.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "letschat_page.html";
}

function logout() {
      
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}


var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

 function send() {
     var msg = document.getElementById("msg").value;

     firebase.database().ref(room_name).push({
       name:user_name,
        message:msg ,
        likes:0
     }
     );

      document.getElementById("msg").value="";
 } 