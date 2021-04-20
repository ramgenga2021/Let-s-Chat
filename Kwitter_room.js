
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1ZBqvU_Jc009hzzM-Dlep3eZa6swufJI",
    authDomain: "let-s-chat-9785d.firebaseapp.com",
    projectId: "let-s-chat-9785d",
    storageBucket: "let-s-chat-9785d.appspot.com",
    messagingSenderId: "1092029824935",
    appId: "1:1092029824935:web:c008c7d2f342a8a6058082"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();