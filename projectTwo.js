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
var connectionId;
var userCredential;
var passCredential;
var mentorStatus;

// Mentors variables

// Mentees variables

// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function logout(){
    localStorage.clear();
}

function processProfilePage(){
    /*displays the data on the profile page from our db*/

    document.getElementById("profileName").innerHTML = localStorage.getItem('name');
    document.getElementById("profileParagraph").innerHTML = localStorage.getItem('bio');
    document.getElementById("emailPlaceHolder").innerHTML = "Email : " + localStorage.getItem('email');
    document.getElementById("phonePlaceHolder").innerHTML = "Phone: " + localStorage.getItem('phone');
    document.getElementById("slackPlaceHolder").innerHTML = "Slack : " + localStorage.getItem('slack');
    document.getElementById("skypePlaceHolder").innerHTML = "Skype: " + localStorage.getItem('skype');

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
    console.log(localStorage.getItem('connectionId'));
    console.log(localStorage.getItem('userCredential'));
    console.log(localStorage.getItem('passCredential'));
    console.log(localStorage.getItem('mentorStatus'));
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
        mentorLoginCred();
        menteeLoginCred();

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
        for (var i=0; data.Result.length > i; i++){
            if (signInUsername === data.Result[i].Username && signInPassword === data.Result[i].Password){
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
                mentorStatus = true;
                console.log(mentorStatus);
                localStorageFunction();
                break;
            }
        }//end for loop   
    });//end sql query

}

function menteeLoginCred(){
    // getting values from form 
    signInUsername = document.getElementById("userNameId").value;
    signInPassword = document.getElementById("passwordId").value;

    // getting value and setting it to use in other functions 
    //sessionStorage.setItem("testOne", signInUsername);

    // comparing values to database
    let sqlStmt2 = "SELECT * FROM Mentee";

    //Sql query and assign data
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt2, function(data) {
    var counter = 0;
        for (var i=0; data.Result.length > i; i++){
            if (signInUsername === data.Result[i].Username && signInPassword === data.Result[i].Password){
                //console.log("Matched Mentee: " + data.Result[i].Name)
                id = data.Result[i].MenteeId;
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
                connectionId = data.Result[i].MentorFK;
                userCredential = data.Result[i].Username;
                passCredential = data.Result[i].Password;
                mentorStatus = false;

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
    localStorage.setItem('connectionId', connectionId);
    localStorage.setItem('userCredential', userCredential);
    localStorage.setItem('passCredential', passCredential);
    localStorage.setItem('mentorStatus', mentorStatus);

    goToHomePage();
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

function processUpdatePage(){
    document.getElementById("bioUpdateId").value = localStorage.getItem('bio');
}
function processUpdatePage1(){
    document.getElementById("emailUpdateId").value = localStorage.getItem('email');
}
function processUpdatePage2(){
    document.getElementById("phoneUpdateId").value = localStorage.getItem('phone');

}
function processUpdatePage3(){
    document.getElementById("slackUpdateId").value = localStorage.getItem('slack');
}
function processUpdatePage4(){
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
  
    if (localStorage.getItem('mentorStatus') == 'true'){

    //     sqlStatement = "UPDATE Mentor SET Bio = " + localStorage.getItem('bio');
	// 	whereClause = " WHERE MentorId = " + localStorage.getItem('id');
	// 	sqlStatement = sqlStatement + whereClause;
    //     console.log(sqlStatement);


    } else if (localStorage.getItem('mentorStatus') == 'false'){

        let sqlStatement, whereClause;
        sqlStatement = "UPDATE Mentee SET Bio = " + "'" + document.getElementById("bioUpdateId").value + "'";
        whereClause = " WHERE MenteeId = " + localStorage.getItem('id');
        sqlStatement = sqlStatement + whereClause;
        //console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
            //UPDATE Mentee SET bio = 'Hello there!' WHERE MenteeId = 4;
        })

        sqlStatement = "UPDATE Mentee SET Email = " + "'" + document.getElementById("emailUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        sqlStatement = "UPDATE Mentee SET Phone = " + "'" + document.getElementById("phoneUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        sqlStatement = "UPDATE Mentee SET Slack = " + "'" + document.getElementById("slackUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

        sqlStatement = "UPDATE Mentee SET Skype = " + "'" + document.getElementById("skypeUpdateId").value + "'";
        sqlStatement = sqlStatement + whereClause;
        console.log(sqlStatement);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        })

    }

}