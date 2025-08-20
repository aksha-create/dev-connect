const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");
app.get("/user/:userId", (req, res) => {
  res.send("akshay with " + req.params);
  console.log(req.params);
});
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
});
app.use("/admin", adminAuth);
app.get("/admin/getAllData", (req, res) => {
  res.send("data sent successfully...");
});
app.get(
  "/user",
  userAuth,
  (req, res, next) => {
    console.log("first response");
    next();
    res.send({ firstname: "Akshay", lastname: "Muddada" });
  },
  (req, res) => {
    console.log("2nd response");
    res.send("second response");
  }
);
app.post("/user", (req, res) => {
  res.send("data posted successfully...");
});
app.patch("/user", (req, res) => {
  res.send("data updated successfully..");
});
app.delete("/user", (req, res) => {
  res.send("data deleted successfully..");
});
app.use("/", (req, res) => {
  res.send("this is the dashboard...");
});
app.listen(3000, () => {
  console.log("running on port 3000");
});
