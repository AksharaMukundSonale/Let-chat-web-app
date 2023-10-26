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
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0,
          dislike: 0
    });
document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
dislike = message_data['dislike'];
name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr> ";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code 
    } });  }); }
getData();

function updateLike(message_id)
{
    console.log("Clicked on like button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes)+1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like: update_likes
    })
}
