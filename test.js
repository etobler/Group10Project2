"use strict";
/*
var mysql = require('mysql');


window.onload = function()
{	
	document.getElementById("myProfileButtonId", href="profilePage.html").onclick = processForm;
}

function processForm(){

    var con = mysql.createConnection({
        host: "107.180.1.16",
        user: "group102021",
        password: "2021group10",
        database: "2021group10"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Test", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            console.log(fields);
          });
      });


		let sqlStmt, whereClause;
		sqlStmt = "SELECT * FROM Test";
		//whereClause = " WHERE RecNumber = " + number;
		//console.log(number);

		//sqlStmt = sqlStmt + whereClause;

		MySql.Execute("107.180.1.16", "group102021", "2021group10", "2021group10", sqlStmt, function(data) {

			console.log(sqlStmt);

            console.log(data);
			console.log("name: ", data.name);

			console.log("Proceed? ", data.Success);

			console.log("Length: ", data.Result.length)
			
			//var dataAsString = JSON.stringify(data);
			//document.getElementsById("profileName")[0] = dataAsString;
			

			var recordAsString = JSON.stringify(data.Result[0]);
			console.log("Single row/record as string: ", recordAsString);

			fieldValue = data.Result[0].name;
			console.log("Single row's Name: ", fieldValue);

			fieldValue2 = data.Result[0].isAwesome;
			console.log("Single row's isAwesome: ", fieldValue2);
			
            fieldValue3 = data.Result[0].id;
			console.log("Single row's id: ", fieldValue3);


			for (i=0; nameArray.length > i; i++)
			{
                console.log(nameArray[i]);
				
			}

		});
	}*/