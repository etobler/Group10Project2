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
var id;
var profileName;
var bio;
var email;
var phone;
var slack;
var skype;
var department;
var years;
var hobby;
var formCas;
var mStone;
var userCredential;
var passCredential;
var mentorStatus;
var connectionId;
var photo;

// Mentors variables

// Mentees variables

// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function logout(){
    localStorage.clear();
    window.location.href = "projecttwo.html";

}

function processProfilePage(){
    /*displays the data on the profile page from our db*/

    document.getElementById("profileName").innerHTML = localStorage.getItem('name');
    document.getElementById("profileParagraph").innerHTML = localStorage.getItem('bio');
    document.getElementById("emailPlaceHolder").innerHTML = "Email : " + localStorage.getItem('email');
    document.getElementById("phonePlaceHolder").innerHTML = "Phone: " + localStorage.getItem('phone');
    document.getElementById("slackPlaceHolder").innerHTML = "Slack : " + localStorage.getItem('slack');
    document.getElementById("skypePlaceHolder").innerHTML = "Skype: " + localStorage.getItem('skype');
    document.getElementById("myProfilePictureId").src = localStorage.getItem('photo');

    

    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('name'));
    console.log(localStorage.getItem('bio'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('phone'));
    console.log(localStorage.getItem('slack'));
    console.log(localStorage.getItem('skype'));
    console.log(localStorage.getItem('department'));
    console.log(localStorage.getItem('years'));
    console.log(localStorage.getItem('hobby'));
    console.log(localStorage.getItem('formCas'));
    console.log(localStorage.getItem('mStone'));
    console.log(localStorage.getItem('userCredential'));
    console.log(localStorage.getItem('passCredential'));
    console.log(localStorage.getItem('mentorStatus'));
    console.log(localStorage.getItem('connectionId'));
    console.log(localStorage.getItem('photo'));



}

function processMilestonesPage() {
    // Changes milestone progress bar based on milestone retrieved from database
    console.log(localStorage.getItem('mStone'));
    let tempMile = localStorage.getItem('mStone');
    console.log(tempMile);
    // let testing = 3;
    if(tempMile == 0) {
        console.log("Do nothing");
    }
    else if(tempMile == 1) {
        // removes old progress bar info and moves it to the next step
        var tempProgressBarId = document.getElementById("connectBar");
        tempProgressBarId.classList.add("is-active");
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.remove("is-active")
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.add("is-complete");

    }
    else if(tempMile == 2) {
        // removes old progress bar info and moves it to the next step
        var tempProgressBarId = document.getElementById("growBar");
        tempProgressBarId.classList.add("is-active");
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.remove("is-active")
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.add("is-complete");
        var tempProgressBarId = document.getElementById("connectBar");
        tempProgressBarId.classList.add("is-complete");

    }
    else if(tempMile == 3) {
        // removes old progress bar info and moves it to the next step
        var tempProgressBarId = document.getElementById("transitionBar");
        tempProgressBarId.classList.add("is-active");
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.remove("is-active")
        var tempProgressBarId = document.getElementById("initiateBar");
        tempProgressBarId.classList.add("is-complete");
        var tempProgressBarId = document.getElementById("connectBar");
        tempProgressBarId.classList.add("is-complete");
        var tempProgressBarId = document.getElementById("growBar");
        tempProgressBarId.classList.add("is-complete");

    }
    else {
        //nope
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
        let sqlStmt  = "SELECT * FROM Mentor";

        //Sql query and assign data
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
            var counter = 0;
            for (var i=0; data.Result.length > i; i++){
                if (signUpEmail == data.Result[i].Email){
                    alert("This email is already in our systems. Please sign in or use another email.")
                    return;
                }
                if(signUpUsername == data.Result[i].Username){
                    alert("This username is already taken. Please choose a different username.")
                    return;
                }
            }
            email = signUpEmail;
            userCredential = signUpUsername;
            passCredential = SignUpPassword;
            console.log(email, userCredential, passCredential);
            localStorage.setItem('email', email);
            localStorage.setItem('userCredential', userCredential);
            localStorage.setItem('passCredential', passCredential);

            goToSurveyPage();
        })

        //goToSurveyPage();
        //newUserLocalStorageFunction(); 
    }
}

function clickSignIn(form) {
    // if input isn't valid pops up an error message
    if (!form.checkValidity()) {
        alert("Please check your input, username must be at least 3 characters, \n Password must be at least 5 characters")
    }
    else {
        mentorLoginCred();
        
         // erasing values from form
         document.getElementById("userNameId").value = "";
         document.getElementById("passwordId").value = "";
    }
}
  
function mentorLoginCred(){
    // getting values from form 
    signInUsername = document.getElementById("userNameId").value;
    signInPassword = document.getElementById("passwordId").value;

    // comparing values to database
    let sqlStmt  = "SELECT * FROM Mentor";

    //Sql query and assign data
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        var counter = 0;
        for (var i=0; data.Result.length > i; i++){
            if (signInUsername == data.Result[i].Username && signInPassword == data.Result[i].Password){
                //console.log("Matched Mentor: " + data.Result[i].Name);
                id = data.Result[i].MentorId;
                profileName = data.Result[i].Name;
                bio = data.Result[i].Bio;
                email = data.Result[i].Email;
                phone = data.Result[i].Phone;       
                slack = data.Result[i].Slack;
                skype = data.Result[i].Skype;
                department = data.Result[i].Department;
                years = data.Result[i].YearsWorked;
                hobby = data.Result[i].FavoriteHobby;
                formCas = data.Result[i].FormalCasual;
                mStone = data.Result[i].Milestone;
                connectionId = data.Result[i].MenteeFK;
                userCredential = data.Result[i].Username;
                passCredential = data.Result[i].Password;
                mentorStatus = data.Result[i].MentorStatus;
                connectionId = data.Result[i].ConnectionId;
                photo = data.Result[i].Photo;
                localStorageFunction();
                break;
            }
            counter += 1;
        }//end for loop
        console.log("length "+data.Result.length)
        console.log("counter "+counter);
        if (data.Result.length == counter){    
            alert("Username or Password is incorrect. Please try again.")
        }   
    });//end sql query
}

//Clears any existing local storage and invokes populateStorage function
function localStorageFunction (){
    console.log("localStorageFunction: "+profileName);
    if(!localStorage.getItem('name')) {
        populateStorage();
      } else {
        localStorage.clear();
        populateStorage();
      }
}

//Stores data in the local storage
function populateStorage(){

    localStorage.setItem('id', id);
    localStorage.setItem('name', profileName);
    localStorage.setItem('bio', bio);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('slack', slack);
    localStorage.setItem('skype', skype);
    localStorage.setItem('department', department);
    localStorage.setItem('years', years);
    localStorage.setItem('hobby', hobby);
    localStorage.setItem('formCas', formCas);
    localStorage.setItem('mStone', mStone);
    localStorage.setItem('userCredential', userCredential);
    localStorage.setItem('passCredential', passCredential);
    localStorage.setItem('mentorStatus', mentorStatus);
    localStorage.setItem('connectionId', connectionId);
    localStorage.setItem('photo', photo);

    goToHomePage();
}

function populateSavedData(){
    document.getElementById("emailId").value = localStorage.getItem('email');
}

function clickMentching(form) {
    if (!form.checkValidity()) {
        alert("Please make sure you filled out full name, and chose an option for each of the drop down lists.")
    }
    else {
        //getting values from form
        profileName    = document.getElementById("fullName").value;
        profileName    = profileName.toUpperCase();
        department     = document.getElementById("departmentId").value;
        mentorStatus   = document.getElementById("mentorOrMentee").value;
        years          = document.getElementById("questionOne").value;
        hobby          = document.getElementById("questionTwo").value;
        formCas        = document.getElementById("questionThree").value;
        email          = document.getElementById("emailId").value;
        phone          = document.getElementById("phoneNumberId").value;
        slack          = document.getElementById("slackId").value;
        skype          = document.getElementById("skypeId").value;
        userCredential = localStorage.getItem('userCredential');
        passCredential = localStorage.getItem('passCredential');

        if (mentorStatus == 1 && (years == 1 || years == 2)) {
            // if someone has 2 or less years worked at the company they cannot be a mentor
            alert("You must have 3 or more years of seniority to be a mentor.");
            return;
        }
        else {
            // sending values to database to add details to new user 
            // INSERT INTO Mentor (Name, Department, YearsWorked, FavoriteHobby, FormalCasual, Email, Phone, Slack, Skype, Username, Password, MentorStatus) 
            // VALUES ('KEVIN BLOOM', 1, 7, 0, 1, 'kevin.bloom@gmail.com', '6239876543', 'kevin6', 'live:kevin6', 'kevin.bloom', 'jhgfd', true);

            let sqlStatement, values;
            sqlStatement = "INSERT INTO Mentor (Name, Department, YearsWorked, FavoriteHobby, FormalCasual, Email, Phone, Slack, Skype, Username, Password, MentorStatus, Photo)"
            values = " VALUES ('"+profileName+"', "+department+", "+years+", "+hobby+", "+formCas+", '"+email+"', '"+phone+"', '"+slack+"', '"+skype+"', '"+userCredential+"', '"+passCredential+"', "+mentorStatus+", './profilepictures/profilePicture.jpg');"
            sqlStatement = sqlStatement + values;
            console.log(sqlStatement);
            MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
            })


        }
        let sqlStmt  = "SELECT * FROM Mentor";

        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
            var counter = 0
            for (var i=0; data.Result.length >= i; i++){
                if (i == data.Result.length){
                    id = data.Result[i].MentorId;
                    profileName = data.Result[i].Name;
                    bio = data.Result[i].Bio;
                    email = data.Result[i].Email;
                    phone = data.Result[i].Phone;       
                    slack = data.Result[i].Slack;
                    skype = data.Result[i].Skype;
                    department = data.Result[i].Department;
                    years = data.Result[i].YearsWorked;
                    hobby = data.Result[i].FavoriteHobby;
                    formCas = data.Result[i].FormalCasual;
                    mStone = data.Result[i].Milestone;
                    connectionId = data.Result[i].MenteeFK;
                    userCredential = data.Result[i].Username;
                    passCredential = data.Result[i].Password;
                    mentorStatus = data.Result[i].MentorStatus;
                    connectionId = data.Result[i].ConnectionId;
                    
                }
            }
        })
    }
    alert("You successfully created a profile. Please login.")
    logout();
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

}

function goToMilestonesPage() {
    window.location.href = "milestonesPage.html";
}

function goToEditPage() {
    window.location.href = "editProfile.html";
}

function goToSignUpPage(){
    window.location.href = "signUp.html";
}

function goToSurveyPage(){
    window.location.href = "survey.html";
}

function deleteProfile() {
    var deleteVar = confirm("Are you sure you want to delete your profile?");
    if (deleteVar == true) {
        // write code to remove row from database
        
        console.log(localStorage.getItem('id'));
        console.log(localStorage.getItem('connectionId'));
 
        let sqlStmt = "UPDATE Mentor SET ConnectionId = null";
        let whereClause = " WHERE MentorId = "+localStorage.getItem('connectionId')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
        deleteQuery();



        alert("Your profile was successfully deleted.")
        logout();
    }
}

function deleteQuery(){
    let sqlStmt2  = "DELETE FROM Mentor WHERE MentorId = "+localStorage.getItem('id')+";";
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt2, function(data) {
    });
}

function processUpdatePage(){
    document.getElementById("bioUpdateId").value = localStorage.getItem('bio');
    document.getElementById("emailUpdateId").value = localStorage.getItem('email');
    document.getElementById("phoneUpdateId").value = localStorage.getItem('phone');
    document.getElementById("slackUpdateId").value = localStorage.getItem('slack');
    document.getElementById("skypeUpdateId").value = localStorage.getItem('skype');
}

function updateProfileInfo() {
    localStorage.setItem('bio', document.getElementById("bioUpdateId").value);
    localStorage.setItem('email', document.getElementById("emailUpdateId").value);
    localStorage.setItem('phone', document.getElementById("phoneUpdateId").value);
    localStorage.setItem('slack', document.getElementById("slackUpdateId").value);
    localStorage.setItem('skype', document.getElementById("skypeUpdateId").value);

    updateQuery();
    alert("Successfully updated your profile.")
    goToProfilePage();
}

function updateQuery(){

        let sqlStatement, whereClause;

        //update bio
        sqlStatement = "UPDATE Mentor SET Bio = " + "'" + document.getElementById("bioUpdateId").value + "'";
        whereClause = " WHERE MentorId = " + localStorage.getItem('id');
        sqlStatement = sqlStatement + whereClause;
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        //update email
        sqlStatement = "UPDATE Mentor SET Email = " + "'" + document.getElementById("emailUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        //update phone
        sqlStatement = "UPDATE Mentor SET Phone = " + "'" + document.getElementById("phoneUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        //update slack
        sqlStatement = "UPDATE Mentor SET Slack = " + "'" + document.getElementById("slackUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        //update skype
        sqlStatement = "UPDATE Mentor SET Skype = " + "'" + document.getElementById("skypeUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

}

