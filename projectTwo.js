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

// Connection Variables
var id1;
var profileName1;
var bio1;
var email1;
var phone1;
var slack1;
var skype1;
var department1;
var years1;
var hobby1;
var formCas1;
var mStone1;
var userCredential1;
var passCredential1;
var mentorStatus1;
var connectionId1;
var photo1;
// Mentors variables

// Mentees variables
var hobbyArray = [];
var typeArray = [];
// Milestones variables

// Change status variables

// Chat variables

// Settings variables 

function hidePassword() {
    var x = document.getElementById("passwordId");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

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

    console.log(localStorage.getItem('id1'));
    console.log(localStorage.getItem('name1'));

    

}

function processMentorPage(){
    if(localStorage.getItem('mentorStatus') == 0 && localStorage.getItem('connectionId') != 'null'){
        document.getElementById("profilePictureId").src = localStorage.getItem('photo1');
        document.getElementById("profileName").innerHTML = localStorage.getItem('name1');
        document.getElementById("mentorConnectButton").innerHTML = 'Delete Connection';

    }else if(localStorage.getItem('mentorStatus') == 1){
        document.getElementById("profileName").innerHTML = 'Not Available for your Current Status as a Mentor';
        var mentorButton = document.getElementById("mentorConnectButton");
        mentorButton.disabled = true;
    }else{
        document.getElementById("profilePictureId").src = 'profilepictures/profilePicture.jpg';
        document.getElementById("profileName").innerHTML = 'No mentor yet!'
        document.getElementById("mentorConnectButton").innerHTML = 'Connect';
    }
}

function processMenteePage(){
    if(localStorage.getItem('mentorStatus') == 1 && localStorage.getItem('connectionId') != 'null'){
        document.getElementById("profilePictureId").src = localStorage.getItem('photo1');
        document.getElementById("profileName").innerHTML = localStorage.getItem('name1');
        document.getElementById("menteeConnectButton").innerHTML = 'Delete Connection';

    }else if (localStorage.getItem('mentorStatus') == 0){
        document.getElementById("profileName").innerHTML = 'Not Available for your Current Status as a Mentee';
        var menteeButton = document.getElementById("menteeConnectButton");
        menteeButton.disabled = true;
    }else{
        //do nothing
    }
}

function processMilestonesPage() {
    // Changes milestone progress bar based on milestone retrieved from database
    console.log(localStorage.getItem('mStone'));
    let tempMile = localStorage.getItem('mStone');
    console.log(tempMile);
    // let testing = 3;
    if(tempMile == 0) {
        // console.log("Do nothing");
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

        mentorLoginCred();
        
         // erasing values from form
         document.getElementById("userNameId").value = "";
         document.getElementById("passwordId").value = "";

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

            }
        }//end for loop
        for (var i=0; data.Result.length > i; i++){
            if(connectionId == data.Result[i].MentorId){
                id1 = data.Result[i].MentorId;
                profileName1 = data.Result[i].Name;
                bio1 = data.Result[i].Bio;
                email1 = data.Result[i].Email;
                phone1 = data.Result[i].Phone;       
                slack1 = data.Result[i].Slack;
                skype1 = data.Result[i].Skype;
                department1 = data.Result[i].Department;
                years1 = data.Result[i].YearsWorked;
                hobby1 = data.Result[i].FavoriteHobby;
                formCas1 = data.Result[i].FormalCasual;
                mStone1 = data.Result[i].Milestone;
                connectionId1 = data.Result[i].MenteeFK;
                userCredential1 = data.Result[i].Username;
                passCredential1 = data.Result[i].Password;
                mentorStatus1 = data.Result[i].MentorStatus;
                connectionId1 = data.Result[i].ConnectionId;
                photo1 = data.Result[i].Photo;
            }

            counter += 1;
            if (data.Result.length == counter){    
                if (id == undefined){
                    break;
                }else{
                    localStorageFunction();
                    return;
                }
                
            }  
        }//end for loop

        console.log("length "+data.Result.length)
        console.log("counter "+counter);
        if (data.Result.length == counter){    
            alert("Username or Password is incorrect. Please try again.")
        }   
    });//end sql query
}

function localStorageFunction (){
    //This function clears any existing local storage and invokes populateStorage function
    console.log("localStorageFunction: "+profileName);
    if(!localStorage.getItem('name')) {
        populateStorage();
      } else {
        localStorage.clear();
        populateStorage();
      }
}

function populateStorage(){
    // This function stores data in the local storage

    //set user data
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

    //set connected mentor or mentee data
    localStorage.setItem('id1', id1);
    localStorage.setItem('name1', profileName1);
    localStorage.setItem('bio1', bio1);
    localStorage.setItem('email1', email1);
    localStorage.setItem('phone1', phone1);
    localStorage.setItem('slack1', slack1);
    localStorage.setItem('skype1', skype1);
    localStorage.setItem('department1', department1);
    localStorage.setItem('years1', years1);
    localStorage.setItem('hobby1', hobby1);
    localStorage.setItem('formCas1', formCas1);
    localStorage.setItem('mStone1', mStone1);
    localStorage.setItem('userCredential1', userCredential1);
    localStorage.setItem('passCredential1', passCredential1);
    localStorage.setItem('mentorStatus1', mentorStatus1);
    localStorage.setItem('connectionId1', connectionId1);
    localStorage.setItem('photo1', photo1);

    goToHomePage();
}

function populateSavedData(){
    //This function inserts the new user's email in the survey page
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

function goToChangeStatusPage(){
    window.location.href = "changeStatus.html";
}

function changeStatus() {
    let sqlStatement, whereClause;

    //update mentor status in database
    sqlStatement = "UPDATE Mentor SET MentorStatus = " + 1;
    whereClause = " WHERE MentorId = " + localStorage.getItem('id');
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
    })
    localStorage.setItem('mentorStatus', 1);

    // let sqlStatement, whereClause;

    //update milestone spot in database
    sqlStatement = "UPDATE Mentor SET Milestone = " + 3;
    whereClause = " WHERE MentorId = " + localStorage.getItem('id');
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
    })
    localStorage.setItem('mStone', 3);
}

function connectButtonMentorPage(){
    // Throw an if statement in here to determine if the button says connect or delete.
    // If it says delete, first delete the connection. 
    //Change the button back to connect and the connectionId back to null.
    // Else, when the button says connect, populate a new match by calling matchMentor function.
    // Change the button to "confirm match".
    // if the button says confirm the match, update the database.
    // Change button back to delete 


    if (document.getElementById("mentorConnectButton").innerHTML == 'Delete Connection'){
         //update id connectionid
        let sqlStmt = "UPDATE Mentor SET ConnectionId = null";
        let whereClause = " WHERE MentorId = "+localStorage.getItem('id')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
         //update id1 connectionid1
        sqlStmt = "UPDATE Mentor SET ConnectionId = null";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id1')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
        //update id milestone
        sqlStmt = "UPDATE Mentor SET Milestone = 0";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
        //update id1 milestone
        sqlStmt = "UPDATE Mentor SET Milestone = 0";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id1')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });

        //reset local storage
        localStorage.setItem("connectionId", 'null');
        localStorage.setItem("mStone", 0);
        localStorage.removeItem("id1");
        localStorage.removeItem("name1");
        localStorage.removeItem("bio1");
        localStorage.removeItem("email1");
        localStorage.removeItem("phone1");
        localStorage.removeItem("slack1");
        localStorage.removeItem("skype1");
        localStorage.removeItem("department1");
        localStorage.removeItem("hobby1");
        localStorage.removeItem("formCas1");
        localStorage.removeItem("slack1");
        localStorage.removeItem("mStone1");
        localStorage.removeItem("userCredential1");
        localStorage.removeItem("passCredential1");
        localStorage.removeItem("mentorStatus1");
        localStorage.removeItem("connectionId1");
        localStorage.removeItem("photo1");
        
        
        //reset mentor page
        document.getElementById("profilePictureId").src = 'profilepictures/profilePicture.jpg';
        document.getElementById("profileName").innerHTML = 'No mentor yet!'
        document.getElementById("mentorConnectButton").innerHTML = 'Connect';
    }else if (document.getElementById("mentorConnectButton").innerHTML == 'Connect'){
        matchMentor();
    //     console.log(localStorage.getItem('id1'));

        document.getElementById("mentorConnectButton").innerHTML = 'Confirm';
    }else if (document.getElementById("mentorConnectButton").innerHTML == 'Confirm'){
        console.log("im in the confirm else if");
        //update database
        //updateDbAfterMatch();
        document.getElementById("mentorConnectButton").innerHTML = 'Delete Connection';

    }
    console.log("hobby array: "+localStorage.getItem('hobbyArray'));
    console.log("type array: "+localStorage.getItem('typeArray'));

    console.log("connect button id1: "+localStorage.getItem('id1'));
 
}
function connectButtonMenteePage(){
    if (document.getElementById("menteeConnectButton").innerHTML == 'Delete Connection'){
        //update id connectionid
        let sqlStmt = "UPDATE Mentor SET ConnectionId = null";
        let whereClause = " WHERE MentorId = "+localStorage.getItem('id')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
         //update id1 connectionid1
        sqlStmt = "UPDATE Mentor SET ConnectionId = null";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id1')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
        //update id milestone
        sqlStmt = "UPDATE Mentor SET Milestone = 0";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });
        //update id1 milestone
        sqlStmt = "UPDATE Mentor SET Milestone = 0";
        whereClause = " WHERE MentorId = "+localStorage.getItem('id1')+";";
        sqlStmt = sqlStmt + whereClause;
        console.log(sqlStmt);
        MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {
        });

        //reset local storage
        localStorage.setItem("connectionId", 'null');
        localStorage.setItem("mStone", 0);
        localStorage.removeItem("id1");
        localStorage.removeItem("name1");
        localStorage.removeItem("bio1");
        localStorage.removeItem("email1");
        localStorage.removeItem("phone1");
        localStorage.removeItem("slack1");
        localStorage.removeItem("skype1");
        localStorage.removeItem("department1");
        localStorage.removeItem("hobby1");
        localStorage.removeItem("formCas1");
        localStorage.removeItem("slack1");
        localStorage.removeItem("mStone1");
        localStorage.removeItem("userCredential1");
        localStorage.removeItem("passCredential1");
        localStorage.removeItem("mentorStatus1");
        localStorage.removeItem("connectionId1");
        localStorage.removeItem("photo1");
        
        //reset mentor page
        document.getElementById("profilePictureId").src = 'profilepictures/profilePicture.jpg';
        document.getElementById("profileName").innerHTML = 'No mentor yet!'
        document.getElementById("menteeConnectButton").innerHTML = 'Connect';
   }else if (document.getElementById("menteeConnectButton").innerHTML == 'Connect'){
       matchMentor();
   //     document.getElementById("menteeConnectButton").innerHTML = 'Confirm';
   }
//    else if (document.getElementById("menteeConnectButton").innerHTML == 'Confirm'){
   //     //update database
//    }

   // let sqlStatement, whereClause;

   // //update milestone spot in database
   // sqlStatement = "UPDATE Mentor SET Milestone = " + 2;
   // whereClause = " WHERE MentorId = " + localStorage.getItem('id');
   // sqlStatement = sqlStatement + whereClause;
   // MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
   // })
   // localStorage.setItem('mStone', 2);
}

function deleteProfile() {
    var deleteVar = confirm("Are you sure you want to delete your profile?");
    if (deleteVar == true) {
        
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

function matchMentor() {
    //function to actually do the matching using hobby and relationship type 
    var userHobby = localStorage.getItem('hobby');
    var userType = localStorage.getItem('formCas');
    let sqlStatement, whereClause;
    // var hobbyArray = []; 
    // var typeArray = [];
    console.log(userHobby);

    matchHobby();

    // localStorage.getItem('hobbyArray');
    // localStorage.getItem('typeArray');
    console.log(localStorage.getItem('hobbyArray'));
    console.log(localStorage.getItem('typeArray'));


    // making sure the arrays are sorted in ascending order
    hobbyArray.sort(function(a, b){return a - b});
    typeArray.sort(function(a, b){return a - b});


}

function matchHobby() {
    var userHobby = localStorage.getItem('hobby');
    var matchMentorStatus;
    let sqlStatement, whereClause;
    //var hobbyArray = []; 
    // favorite hobby

    if (localStorage.getItem('mentorStatus')==1){
        matchMentorStatus = 0;
    }else if(localStorage.getItem('mentorStatus')==0){
        matchMentorStatus = 1;
    }

    sqlStatement = "SELECT * FROM Mentor";
    whereClause = " WHERE FavoriteHobby = " + userHobby + " AND ConnectionId IS NULL AND MentorStatus = "+matchMentorStatus+";";
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        for (var i=0; data.Result.length > i; i++){
            // id = data.Result[i].MentorId;
            var tempIid = data.Result[i].MentorId;
            // adding mentor id to an array if they like the same hobby 
            hobbyArray.push(tempIid);
            //console.log('hobby: '+ hobbyArray);
        }
        // calling function here so it goes after 
        localStorage.setItem('hobbyArray', hobbyArray);
        console.log("hobby array: "+localStorage.getItem('hobbyArray'));
        matchType();
            
    });
}

async function matchType() {
    var userType = localStorage.getItem('formCas');
    var matchMentorStatus;
    let sqlStatement, whereClause;
    var typeArray = [];

    if (localStorage.getItem('mentorStatus')==1){
        matchMentorStatus = 0;
    }else if(localStorage.getItem('mentorStatus')==0){
        matchMentorStatus = 1;
    }
    sqlStatement = "SELECT * FROM Mentor";
    whereClause = " WHERE FormalCasual = " + userType + " AND ConnectionId IS NULL AND MentorStatus = "+ matchMentorStatus;
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        for (var i=0; data.Result.length > i; i++){
            var tempId = data.Result[i].MentorId;
            // adding mentor id to an array if they like the same relationship type
            typeArray.push(tempId);
            //console.log('Type: ' + typeArray);
            localStorage.setItem('typeArray', typeArray);
        }
            
    });
    console.log(localStorage.getItem('hobbyArray'));
    await sleep(3000);
    console.log(localStorage.getItem('typeArray'));
    matchingResults();

}

function matchingResults() {
    localStorage.getItem('hobbyArray');
    localStorage.getItem('typeArray');
    console.log(localStorage.getItem('hobbyArray'));
    console.log(localStorage.getItem('typeArray'));
    compareArrays();
}

function compareArrays() {
    //comparing the arrays to see if any numbers are the same
    localStorage.getItem('hobbyArray');
    localStorage.getItem('typeArray');
    console.log(localStorage.getItem('hobbyArray'));
    console.log(localStorage.getItem('typeArray'));

    // changing the strings to arrays for comparison 
    var hobbyArray = localStorage.getItem('hobbyArray').split(",");
    console.log(hobbyArray);
    localStorage.setItem('hobbyArray', hobbyArray);

    var typeArray = localStorage.getItem('typeArray').split(",");
    console.log(typeArray);
    console.log(typeArray.length);
    localStorage.setItem('typeArray', typeArray);

    for (var i=0; i < hobbyArray.length; i++) {
        console.log(hobbyArray[i]);
        if( id1 ) {
            break;
        }
        for (var j=0; j < typeArray.length; j++) {
            console.log(typeArray[j]);
            if (hobbyArray[i] == typeArray[j]) {
                console.log("id: " +hobbyArray[i]);
                console.log("id: " +typeArray[j]);
                var id1 = typeArray[j];
                // setting the value if the ids are the same to id1 variable 
                localStorage.setItem('id1', id1);
                break;
            }
        }

    }

    console.log("compare array id1: "+localStorage.getItem('id1'))
    newMentorInfo();
    
}

async function newMentorInfo () {
    // getting info of the new mentor
    console.log(localStorage.getItem('id1'));
    let tempId = localStorage.getItem('id1');
    console.log(tempId);
    let sqlStatement, whereClause;
    sqlStatement = "SELECT * FROM Mentor";
    whereClause = " WHERE MentorId = " + tempId;
    // whereClause = " WHERE MentorId = 16";
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
        for (var i=0; data.Result.length > i; i++){
                id1 = data.Result[i].MentorId;
                profileName1 = data.Result[i].Name;
                bio1 = data.Result[i].Bio;
                email1 = data.Result[i].Email;
                phone1 = data.Result[i].Phone;       
                slack1 = data.Result[i].Slack;
                skype1 = data.Result[i].Skype;
                department1 = data.Result[i].Department;
                years1 = data.Result[i].YearsWorked;
                hobby1 = data.Result[i].FavoriteHobby;
                formCas1 = data.Result[i].FormalCasual;
                mStone1 = data.Result[i].Milestone;
                connectionId1 = data.Result[i].MenteeFK;
                userCredential1 = data.Result[i].Username;
                passCredential1 = data.Result[i].Password;
                mentorStatus1 = data.Result[i].MentorStatus;
                connectionId1 = data.Result[i].ConnectionId;
                photo1 = data.Result[i].Photo;
            }
    });
    await sleep(2000);
    localStorage.setItem('id1', id1)
    localStorage.setItem('name1', profileName1);
    localStorage.setItem('bio1', bio1);
    localStorage.setItem('email1', email1);
    localStorage.setItem('phone1', phone1);
    localStorage.setItem('slack1', slack1);
    localStorage.setItem('skype1', skype1);
    localStorage.setItem('department1', department1);
    localStorage.setItem('years1', years1);
    localStorage.setItem('hobby1', hobby1);
    localStorage.setItem('formCas1', formCas1);
    localStorage.setItem('mStone1', mStone1);
    localStorage.setItem('userCredential1', userCredential1);
    localStorage.setItem('passCredential1', passCredential1);
    localStorage.setItem('mentorStatus1', mentorStatus1);
    localStorage.setItem('connectionId1', id);
    localStorage.setItem('connectionId', id1)
    localStorage.setItem('photo1', photo1);


    updateDbAfterMatch();
}

function updateDbAfterMatch(){
    let sqlStatement, whereClause;
    var tempId = localStorage.getItem(id1);
    // updating mentee connection id 
    sqlStatement = "UPDATE Mentor SET ConnectionId = " + tempId;
    whereClause = " WHERE MentorId = " + localStorage.getItem('id');
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
    })

    // updating mentor connection id 
    tempId = localStorage.getItem(id);
    sqlStatement = "UPDATE Mentor SET ConnectionId = " + tempId;
    whereClause = " WHERE MentorId = " + localStorage.getItem('id1');
    sqlStatement = sqlStatement + whereClause;
    MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStatement, function(data) {
    })

    localStorage.setItem('connectionId', id1);
    localStorage.setItem('connectionId1', id);
    
    testing();

  // processMentorPage();
//    processMenteePage();
}

async function testing() {
    await sleep(2000);
    console.log(localStorage.getItem('id1'));
    console.log(localStorage.getItem('name1'));
    console.log(localStorage.getItem('bio1'));
    console.log(localStorage.getItem('email1'));
    console.log(localStorage.getItem('phone1'));
    console.log(localStorage.getItem('slack1'));
    console.log(localStorage.getItem('skype1'));
    console.log(localStorage.getItem('department1'));
    console.log(localStorage.getItem('years1'));
    console.log(localStorage.getItem('hobby1'));
    console.log(localStorage.getItem('formCas1'));
    console.log(localStorage.getItem('mStone1'));
    console.log(localStorage.getItem('userCredential1'));
    console.log(localStorage.getItem('passCredential1'));
    console.log(localStorage.getItem('mentorStatus1'));
    console.log(localStorage.getItem('connectionId1'));
    console.log(localStorage.getItem('photo1'));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }