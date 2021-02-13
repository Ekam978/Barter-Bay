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

function register() 
{
  Name = document.getElementById("name").value;
  number = document.getElementById("number").value;
  email = document.getElementById("email").value;
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("name",Name);
  localStorage.setItem("user_name",user_name);
  localStorage.setItem("number",number);
  localStorage.setItem("email",email);
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user name"
  });
  document.getElementById("main_div").style.display = "none";
  row = "<div class = main_div><h1>Welcome to Barter Exchange!<br> Now Exchange the things you want</h1><br><br><button class='navigate' onclick='nvg()' !important;>Join Barter Exchange Community Now!</div>";
  document.getElementById("container").innerHTML = row;
}

function nvg() {
  window.location = "first page.html";
}