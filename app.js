
// const express = require("express");
// require("dotenv").config();
// const app = express();

// // route
// app.get("/", (req, res) => {
//   // Sending This is the home page! in the page
//   res
//     .status(200)
//     .send(`This is the home page and running on ${process.env.PORT}`);
// });

// // Listening to the port 
// let PORT = process.env.PORT ? process.env.PORT : 8000;
// console.log(PORT);
// app.listen(PORT, () => {
//   console.log(`Server is running...`);
// });

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('A Monk in Cloud testing'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
