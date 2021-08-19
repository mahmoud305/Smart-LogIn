var newUserNameInput = document.getElementById("registerationUserName");
var newUserEmailInput = document.getElementById("registerationEmail");
var newUserPasswordInput = document.getElementById("registerationPassword");

var userEmailInput = document.getElementById("userEmail");
var ueserPassInput = document.getElementById("userPassword");
var invalidMessageInput = document.getElementById("invalidInput");
var WelcomeMessage = document.getElementById("welcomeMessage");

var usersContainer;

if (localStorage.getItem("usersList") == null) {
    usersContainer = [];
}
else {
    usersContainer = JSON.parse(localStorage.getItem("usersList"));
}
function emailValidation(usermail) {
    for (var i = 0; i < usersContainer.length; i++) {
        if (usersContainer[i].userEmail == usermail)
            return false;
    }
    return true;
}
function emptyChecker() {
    if (newUserNameInput.value == "" || newUserEmailInput.value == "" || newUserPasswordInput.value == "")
        return false;
    return true;
}
function signUp() {
    if (!emailValidation(newUserEmailInput.value)) {
        invalidMessageInput.innerHTML = "This Email already Exists";
        invalidMessageInput.style = "color:red;";
        alert(" email Exist");
        return;
    }
    if(!emptyChecker()){
        invalidMessageInput.innerHTML = "All inputs is required";
        invalidMessageInput.style = "color:red;";
        return;
    }
    var user = {
        userName: newUserNameInput.value,
        userEmail: newUserEmailInput.value,
        userPassword: newUserPasswordInput.value
    }

    usersContainer.push(user);
    localStorage.setItem("usersList", JSON.stringify(usersContainer));
    invalidMessageInput.innerHTML = "Success";
    invalidMessageInput.style = "color:green;   font-weight: bolder;";
    // alert("end of registeration ");
    console.log(usersContainer);

}

function checkUserInfo() {
    for (var i = 0; i < usersContainer.length; i++) {
        if (usersContainer[i].userEmail == userEmailInput.value &&
            usersContainer[i].userPassword == ueserPassInput.value) {
            return i;
        }
    }
    return -1;
}

function logIn() {
    var index = checkUserInfo();
    if (index == -1) {
        invalidMessageInput.innerHTML = "invalid email or password";
        invalidMessageInput.style = "color:red; text-weight:bold;";
        return;
    }
    sessionStorage.setItem("userName", usersContainer[index].userName);
    window.location.href = "htmlPages/home.html";

}


