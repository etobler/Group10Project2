"use strict";

// Sign in page variables
var signInUsername; 
var signInPassword;

// Sign up page variables

var signUpEmail;
var signUpUsername;
var SignUpPassword;

// Survey page variables

// Home page variables

// My profile variables

// Mentors variables

// Mentees variables

// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function clickSignUp(form) {
    // if input isn't valid pops up an error message
    if (!form.checkValidity()) {
        alert("Please check your input, full name must be entered,\n username must be at least 3 characters, \n Password must be at least 5 characters")
    }
    else {
        // getting values from form
        signUpEmail = document.getElementById("emailId").value;
        signUpUsername = document.getElementById("userNameId").value;
        SignUpPassword = document.getElementById("passwordId").value;

        // sending values to database to create new account 

        // go to survey page 
        window.location.href = "survey.html";
    }
}

function clickSignIn(form) {
    // if input isn't valid pops up an error message
    if (!form.checkValidity()) {
        alert("Please check your input, username must be at least 3 characters, \n Password must be at least 5 characters")
    }
    else {
        // getting values from form 
        signInUsername = document.getElementById("userNameId").value;
        signInPassword = document.getElementById("passwordId").value;

        // comparing values to database

        // go to homepage
        window.location.href = "homepage.html";
    }
}
