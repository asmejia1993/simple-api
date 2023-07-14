const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

//Example endpoint
app.get("/users", (req, res) => {
  const id = req.query.id;
  if (!id) {
    res.send(users);
  }
  const filteredUser = users.filter((u) => u.id === id)[0];
  res.send(filteredUser);
});
