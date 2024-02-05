import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MOngodb");
  })
  .catch((err) => console.log(err));

const app = express();



app.listen(8000, () => {
  console.log("server is running at port 9000!!");
});

app.use("/api/user",userRouter);
