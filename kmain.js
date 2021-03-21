function logOut() {
    localStorage.removeItem("Room name");
    localStorage.removeItem("User name");
    window.location = "jindex.html";
}

function BBB() {
    var c = localStorage.getItem("Room name");
    document.getElementById("room").innerHTML = "Welcome to room : " + c + " ✨✨✨";
}