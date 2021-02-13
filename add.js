user_name = localStorage.getItem("user_name");

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
  
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "first page.html";
    }


Webcam.set({
  height : 250,
  width : 350,
  image_format : "png",
  png_quality : 90,
    
  constraints: {
    facingMode: "environment"
  }
});
    
camera = document.getElementById("camera");

function addItem() {
  btn = '<br><button class="capture_image" onclick="capture_image()" >Capture image</button><br>';
  document.getElementById("btn_capture").innerHTML = btn;
  Webcam.attach('#camera');

}

function capture_image() {
  Webcam.snap(function(data_uri){
    firebase.database().ref("/").child(user_name).push({
      image_src:data_uri,
    });
  });
  window.location = "kwitter_room.html";
}