// ===============================
// Login System
// ===============================


const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;


    let errorMessage = document.getElementById("errorMessage");



    // Default Login Details

    if(email === "siddiqueesahil9@gmail.com" && password === "S@hil2336"){


        // Login Status Save

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // Open Dashboard

        window.location.href = "dashboard.html";


    }

    else{


        errorMessage.innerText =
        "Invalid Email or Password";


    }


});