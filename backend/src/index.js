require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Travel Map");
});

app.listen(port, () => {
  console.log("server is running on: http://localhost:" + port);
});
