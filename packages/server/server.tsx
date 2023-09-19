import express from "express";
//const TheModel = require('./db');
const app = express();
const port = 3001;

// allow CORS for all routes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log("Server is running on port 3001");
});
