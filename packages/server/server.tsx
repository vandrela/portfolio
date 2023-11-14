import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = 3001;

const url = 'mongodb+srv://IliaMarkulcsak:02062004_Iliya@cluster0.elkgw12.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(url);
    console.log('Connected to the database');
  } catch (error) {
    console.error(error);
  }
}

connect();

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
