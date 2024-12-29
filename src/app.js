const express = require("express");
const app = express();
app.listen(7777, () => {
  console.log("starting the server at 3000 port");
});
app.use("/testing", (req, res) => {
  res.send("welcome to the profile page");
});
app.use("/", (req, res) => {
  res.send("welcome to the dashboard");
});
