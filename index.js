import express from "express";
import cors from "cors";
import studentRouter from "./routes/student.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("You have reached the top-level route with a GET");
});
app.get("/studnets", (req, res) => {
  res.send({students});
});
app.use("/students", studentRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// //import/require express so we can use it to create our application
// const express = require("express");
// //import cors so we can use it to allow requests to our api from specific sources
// const cors = require("cors");
// const studentRouter = require('./routes/student.routes').default
// //run express to create an express app and store it in the variable named app
// const app = express();
// //turn on cors
// app.use(cors());
// //let express know that it is going to get JSON sent to it at some point in a request
// app.use(express.json());

// //creating a variable represents the port we want our app to listen on
// const port = process.env.PORT || 4000;

// // add a default route
// app.get("/", function (req, res) {
//   res.send("You have reached the top-level route with a GET");
// });

// // const studentRouter = require("./routes/student.routes").default;
//  //app.use("/students", studentRouter);

// //basically fire up the express app.
// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`);
// });
