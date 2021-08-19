function printInHome( ){
    // alert("before");
    document.getElementById("welcomeMessage").innerHTML="Welcome "+sessionStorage.getItem("userName");
    // alert("after");
    // alert(usersContainer[index].userName);
    // invalidMessageInput.innerHTML="invalid email or password";
    // WelcomeMessage.innerHTML="Hello World";
    // // document.getElementById("welcomeMessage").style="font-size:40px;color:white;";
    // document.getElementById("test").style=" background-color: red;";
    // alert("End");
    // invalidMessageInput.innerHTML="welcome "+    usersContainer[index].userName;
    // invalidMessageInput.style="color:red; text-weight:bold;";

}

printInHome();