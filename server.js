
"use strict";
// Creates Web server with nodejs.
var http = require('http');     // Alternate mechanisim: import * as http from 'http';
var fs = require('fs');         // import * as fs from 'fs';
var url = require('url');       // import * as url from 'url';
var path = require('path');     // import * as path from 'path';
var mysql = require('mysql');

var fileExtensions = {
     ".html":    "text/html",
     ".css":     "text/css",
     ".js":      "text/javascript",
     ".jpeg":    "image/jpeg",
     ".jpg":     "image/jpeg",
     ".png":     "image/png",
     ".json":    "text/json"
 };

var server = http.createServer(function(request, response) { 
    var pathname = url.parse(request.url).pathname;
    //const pathname = new URL('/projectwo', 'http://mentch.com/');
    //const pathname = new URL('/projectwo', { toString: () => 'http://localhost:5001/'});
    var filename;

    console.log("");
    console.log("Request.url: " + request.url.toString());
    console.log("Pathname: " + pathname);

    if(pathname === "/") {
        filename = "projectTwo.html"; 

        console.log("");
        console.log("FileName: " + filename);
    }
    else
        filename = path.join(process.cwd(), pathname);

    try {
        fs.accessSync(filename, fs.F_OK);
        var fileStream = fs.createReadStream(filename);
        var typeAttribute = fileExtensions[path.extname(filename)];

         console.log("");
         console.log("File extension: " + path.extname(filename));
         console.log("Type Attribute: " + typeAttribute);

        response.writeHead(200, {'Content-Type': typeAttribute});
        fileStream.pipe(response);
    }
    catch(e) {
            console.log("");
            console.log('File does not exist: ' + filename);
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('404 - File Not Found (' + filename + ')');
            response.end();
            return;
    }
      return;
});
// Test the db to ensure there is a connection and that we can make queries.
var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "group102021",
    password: "2021group10",
    database: "2021group10"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!"); 
     
  });
  
  con.query("SELECT * FROM Test", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.end();

  });
  
  con.query("UPDATE Test SET isAwesome = 1 WHERE name = ('Nathan')", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  con.query("SELECT * FROM Test", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

server.listen(5001);

console.log("\nThe Web server is running. I am a robot.\n"  + 
    "I am listening on http://127.0.0.1:5001 or http://localhost:5001");

        



