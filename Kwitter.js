function addUser (){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User is", user_name);
    window.location = "kwitter_room.html";
}