
var firebaseConfig = {
  apiKey: "AIzaSyDhQUMHCP0zrq4P3LortNMKh-zxyW-JKK4",
  authDomain: "project-95-b56b2.firebaseapp.com",
  databaseURL: "https://project-95-b56b2-default-rtdb.firebaseio.com",
  projectId: "project-95-b56b2",
  storageBucket: "project-95-b56b2.appspot.com",
  messagingSenderId: "869227864840",
  appId: "1:869227864840:web:fd90aaa2a1e10bfe5ac2bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){
   room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name );
  
    window.location = "Kwitter_page.html"
  }


  function getData() {
       firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
  Room_names = childKey;
  
  //Start code
  console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();

function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location="Kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name")
window.location = "index.html";
localStorage.removeItem("room_name")
}

