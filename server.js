const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

//asignmentsl
const app = express();
const port = process.env.PORT || 5000;
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

//port listening
app.listen(port, function () {
  console.log("Clients requests are beeing listening on port =>", port);
});

/*========================API'S======================*/
app.get("/", (req, res) => {
  console.log("Getting request...");
  res.send("hello");
});

app.get("/hello", (req, res) => {
    console.log("Getting request...");
    res.send("hi");
  });

  app.get("/getuserdetail", (req, res) => {
    var uN = req.username;
    var pass = req.password;
    if(username === "chetan" && password === "pass1"){
      res.send("Login Successful");

    }else{
      res.send("Login Failed");
    }
  });