import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MOngodb");
  })
  .catch((err) => console.log(err));

const app = express();

app.listen(9000, () => {
  console.log("server is running at port 9000!!");
});
