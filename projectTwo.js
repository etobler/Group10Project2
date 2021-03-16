"use strict";

// Sign in page variables
var signInUsername; 
var signInPassword;

// Sign up page variables

var signUpEmail;
var signUpUsername;
var SignUpPassword;

// Survey page variables
var fullName;
var department;
var mentorOrMentee;
var yearsWorked;
var favoriteHobby;
var formalOrCasual;

// Home page variables

// My profile variables

// Mentors variables

// Mentees variables

// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function processForm(){
    /*displays the data in the test table from mysql*/
    console.log("Entered processForm");
    let sqlStmt;
    
    sqlStmt = "SELECT * FROM Test";
 
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        console.log(sqlStmt);
        //console.log(data);

        var dataAsString = JSON.stringify(data);
        console.log("data as a string:" + dataAsString);

        var recordAsString = JSON.stringify(data.Result[0]);
        console.log("Single row as string: ", recordAsString);

        var fieldValue = data.Result[0].name;
		console.log("Single row's Name: ", fieldValue);

        document.getElementById("profileName").innerHTML = fieldValue;

        for (var i=0; data.Result.length > i; i++){
            console.log(data.Result[i].name)
        }
    });
    //updateIsAwesome();
}
function updateIsAwesome(){
    console.log("Entered updateIsAwesome");
    let sqlStmt1;
    sqlStmt1 = "UPDATE Test SET isAwesome = 1 WHERE name = ('Nathan')";
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt1, function(data){
        console.log(sqlStmt1);
  
    });
}
//     MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data){
//         console.log(sqlStmt);

//         var recordAsString1 = JSON.stringify(data.Result[0]);
//         console.log("Single row as string: ", recordAsString1);
//     });
 
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

         // erasing values from form
         document.getElementById("userNameId").value = "";
         document.getElementById("passwordId").value = "";

        // comparing values to database

        // go to homepage
        window.location.href = "homepage.html";

    }
}

function clickMentching(form) {
    if (!form.checkValidity()) {
        alert("Please make sure you filled out full name, and chose an option for each of the drop down lists.")
    }
    else {
        //getting values from form
        fullName = document.getElementById("fullName").value;
        department = document.getElementById("departmentId").value;
        mentorOrMentee = document.getElementById("mentorOrMentee").value;
        yearsWorked = document.getElementById("questionOne").value;
        favoriteHobby = document.getElementById("questionTwo").value;
        formalOrCasual = document.getElementById("questionThree").value;

        if (mentorOrMentee == "Mentor" && (yearsWorked == "1 Year or Less" || yearsWorked == "2 Years")) {
            // if someone has 2 or less years worked at the company they cannot be a mentor
            alert("You must have 3 or more years of seniority to be a mentor.");
        }
        else {
            // sending values to database to add details to new user 

            // go to homepage
            window.location.href = "homepage.html";
        }
    }
}
