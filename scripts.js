function aue() {
    var x = document.getElementById("products");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

var users = {
    "user1": "pass1",
    "user2": "pass2",
};

function login() {  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (users.hasOwnProperty(username) && users[username] === password) {
        alert("Logare reușită!");
    } else {
        alert("Nume de utilizator sau parolă incorecte!");
    }
}

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}