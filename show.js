var firebaseConfig = {
  apiKey: "AIzaSyA7Nf8Pt91SBaFK6XEW9K0rdApP2DxEBbE",
  authDomain: "under--8.firebaseapp.com",
  databaseURL: "https://under--8-default-rtdb.firebaseio.com",
  projectId: "under--8",
  storageBucket: "under--8.appspot.com",
  messagingSenderId: "407513267957",
  appId: "1:407513267957:web:560919a9ed481382f60fbc",
  measurementId: "G-BHBCGYCS28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
   user_name = localStorage.getItem("user_name");
   firebase.database().ref("/").child(user_name).update({
     purpose : "adding user name"
   });
   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  user_names = childKey;image_srcs = childKey;
      //Start code
      console.log("Room name-" + user_names);
      console.log("Room name-" + user_names);
      row = "<div class='room_name' id= " + user_names +" >#" + user_names +"<br><image src='"+ image_srcs + "' ></div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index (1).html";
}

function nvg() {
  window.location = "add.html";
}