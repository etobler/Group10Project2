"use strict";

// Sign in page variables
var signInUsername; 
var signInPassword;

// Sign up page variables

var signUpEmail;
var signUpUsername;
var SignUpPassword;
var testOne;
var testTwo;

// Survey page variables
var fullName;
var department;
var mentorOrMentee;
var yearsWorked;
var favoriteHobby;
var formalOrCasual;

// Home page variables

// My profile variables
var profileName;
var bio;
var email;
var phone;
var slack;
var skype;

// Mentors variables

// Mentees variables

// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function processForm(number, type){
    /*displays the data on the profile page from our db*/
    console.log(signInUsername, signInPassword)
    console.log("Entered processForm");
    console.log(sessionStorage.getItem("testOne", signInUsername));
    // getting the username from the sign in info to retrieve profile info from db 
    sessionStorage.getItem("testOne", signInUsername);
    // console.log(sessionStorage.getItem("testOne", signInUsername));

    if (type == false){
        let sqlStmt = "SELECT * FROM Mentor";
    
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {

            profileName = data.Result[number].Name;
            console.log("Single row's Name: ", profileName);

            bio = data.Result[number].Bio;
            console.log("Bio: ", bio);

            email = data.Result[number].Email;
            console.log("Email: ", email);

            phone = data.Result[number].Phone;
            console.log("Phone: ", phone);

            slack = data.Result[number].Slack;
            console.log("Slack: ", slack);

            skype = data.Result[number].Skype;
            console.log("Skype: ", skype);

            // document.getElementById("profileName").innerHTML = profileName;
            // document.getElementById("profileParagraph").innerHTML = bio;
            // document.getElementById("emailPlaceHolder").innerHTML = "Email:  " + email;
            // document.getElementById("phonePlaceHolder").innerHTML = "Phone:  " + phone;
            // document.getElementById("slackPlaceHolder").innerHTML = "Slack:  " + slack;
            // document.getElementById("skypePlaceHolder").innerHTML = "Skype:  " + skype;
        });
    }
    else if (type == true) {
        let sqlStmt = "SELECT * FROM Mentee";
    
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {

            profileName = data.Result[number].Name;
            console.log("Single row's Name: ", profileName);

            bio = data.Result[number].Bio;
            console.log("Bio: ", bio);

            email = data.Result[number].Email;
            console.log("Email: ", email);

            phone = data.Result[number].Phone;
            console.log("Phone: ", phone);

            slack = data.Result[number].Slack;
            console.log("Slack: ", slack);

            skype = data.Result[number].Skype;
            console.log("Skype: ", skype);

            // document.getElementById("profileName").innerHTML = profileName;
            // document.getElementById("profileParagraph").innerHTML = bio;
            // document.getElementById("emailPlaceHolder").innerHTML = "Email:  " + email;
            // document.getElementById("phonePlaceHolder").innerHTML = "Phone:  " + phone;
            // document.getElementById("slackPlaceHolder").innerHTML = "Slack:  " + slack;
            // document.getElementById("skypePlaceHolder").innerHTML = "Skype:  " + skype;
        });
    }
}

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
        // getting value and setting it to use in other functions 
        sessionStorage.setItem("testOne", signInUsername);

         // erasing values from form
         document.getElementById("userNameId").value = "";
         document.getElementById("passwordId").value = "";

        // comparing values to database

        let sqlStmt  = "SELECT * FROM Mentor";
        let sqlStmt2 = "SELECT * FROM Mentee";
 
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {

            console.log(signInUsername, signInPassword)

            for (var i=0; data.Result.length > i; i++){
                if (signInUsername === data.Result[i].Username && signInPassword === data.Result[i].Password){
                    //processForm(i, false);
                    console.log("Match as Mentor at " + data.Result[i].Name)
                }
            }
        });

        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt2, function(data) {

            console.log(signInUsername, signInPassword)

            for (var i=0; data.Result.length > i; i++){
                if (signInUsername === data.Result[i].Username && signInPassword === data.Result[i].Password){
                    //processForm(i, true);
                    console.log("Match as Mentee at " + data.Result[i].Name)
                }
            }
        });


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

function goToHomePage() {
    window.location.href = "homepage.html";
}

function goToMentorsPage() {
    window.location.href = "mentorsPage.html";
}

function goToMenteesPage() {
    window.location.href = "menteesPage.html";
}

function goToProfilePage() {
    window.location.href = "profilePage.html";

    // console.log(profileName);
    // document.getElementById("profileName").innerHTML = profileName;
    // document.getElementById("profileParagraph").innerHTML = bio;
    // document.getElementById("emailPlaceHolder").innerHTML = "Email:  " + email;
    // document.getElementById("phonePlaceHolder").innerHTML = "Phone:  " + phone;
    // document.getElementById("slackPlaceHolder").innerHTML = "Slack:  " + slack;
    // document.getElementById("skypePlaceHolder").innerHTML = "Skype:  " + skype;
}

function updateProfileInfo() {
    window.location.href = "profilePage.html";
}

function goToMilestonesPage() {
    window.location.href = "milestonesPage.html";
}

function goToEditPage() {
    window.location.href = "editProfile.html";
}

function deleteProfile() {
    var deleteVar = confirm("Are you sure you want to delete your profile?");
    if (deleteVar == true) {
        // write code to remove row from database
        let sqlStmt  = "SELECT * FROM Mentor";
        let sqlStmt2 = "SELECT * FROM Mentee";
 
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {


            sessionStorage.getItem("testOne", signInUsername);
            console.log(sessionStorage.getItem("testOne", signInUsername));
            for (var i=0; data.Result.length > i; i++){
                if (signInUsername === data.Result[i].Username){
                    // let sqlStmtThree = "DELETE FROM Mentor WHERE Username= 'cuba.oliver'";
                    // MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmtThree, function(data) {
                        // MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
                        // });
                    // });
                    //processForm(i, false);
                    // console.log("Match as Mentor at " + data.Result[i].Name)
                }
            }
        });

        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt2, function(data) {

            sessionStorage.getItem("testOne", signInUsername);
            for (var i=0; data.Result.length > i; i++){
                if (signInUsername === data.Result[i].Username){
                    // let sqlStmtThree = "DELETE FROM Mentee WHERE Username= " + signInUsername;

                    //processForm(i, true);
                    // console.log("Match as Mentee at " + data.Result[i].Name)
                }
            }
        });
    }
    // window.location.href = "projectTwo.html";
}
