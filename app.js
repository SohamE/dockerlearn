import express from "express";
import { connectToDatabase } from "./helper.js";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello World");
});

const data = await connectToDatabase();
console.log(data);

app.listen(3000, () => {
  console.log("Server is running");
});
