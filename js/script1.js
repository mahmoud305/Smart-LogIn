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
    let emailRegex=/^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/;
    for (var i = 0; i < usersContainer.length; i++) {
        if (usersContainer[i].userEmail == usermail){ 
            invalidMessageInput.innerHTML = "This Email already Exists";
            invalidMessageInput.style = "color:red;";
            alert(" email Exist");
            return false;
        }
    }
    if( !emailRegex.test(usermail) )
    {
        invalidMessageInput.innerHTML = " Invalid Email ";
        invalidMessageInput.style = " color:red; ";
        alert("invalid email ");
        return false;
    }
    return true ;
}
function emptyChecker() {
    if (newUserNameInput.value == "" || newUserEmailInput.value == "" || newUserPasswordInput.value == "")
        return false;
    return true;
}
// 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
function passwordValidation(password){
let passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(passwordRegex.test(password) ) {
    invalidMessageInput.innerHTML = "";
    return true;
}
invalidMessageInput.innerHTML = " Invalid Password ";
invalidMessageInput.style = " color:red; ";
// alert("password is"+password);
return false;
}

newUserPasswordInput.addEventListener("focus",function(){
 
    document.getElementById("passwordDetails").style="display:block";
});

newUserPasswordInput.addEventListener("blur",function(){
     
    document.getElementById("passwordDetails").style="display:none";
    passwordValidation(this.value);
});


newUserNameInput.addEventListener("focus",function(){
 
    document.getElementById("userNameDetails").style="display:block";
});

newUserNameInput.addEventListener("blur",function(){
     
    document.getElementById("userNameDetails").style="display:none";
    userNameValidation(this.value);
});

function userNameValidation(username){
    let userNameRegex=/^[A-Za-z]+ ?[A-Za-z0-9_]+$/;
    alert(userNameRegex.test(username));
    if(userNameRegex.test(username)){ 
    invalidMessageInput.innerHTML = "";
    return true;
    }
    invalidMessageInput.innerHTML = " Invalid useraname ";
    invalidMessageInput.style = " color:red; ";
    return false;
}
function signUp() {
    if(!emptyChecker()){
        invalidMessageInput.innerHTML = "All inputs is required";
        invalidMessageInput.style = "color:red;";
        return;
    }
    if (!emailValidation(newUserEmailInput.value)|| !passwordValidation(newUserPasswordInput.value)||
    !userNameValidation(newUserNameInput.value) ) {
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


