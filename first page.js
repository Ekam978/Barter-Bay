
function addUser()
{
    get_name = document.getElementById("user_name").value;
    userName = localStorage.getItem("user_name");
    if (get_name == userName) {
        window.location = "show.html";
    } else {
        window.alert("Error!You are not a user or you have to enter correct username.");
    }
}

function signUpNvg() {
    window.location = "register.html";
}