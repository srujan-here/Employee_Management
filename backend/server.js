import express from "express";
import router from "./routes/user-routes";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./config/db";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", router);

//mongo connection
connect();

app.get("/", (req, res) => {
  res.status(200).json({ message: "you gotta go bro" });
});

app.listen(3000, (req, res) => {
  console.log(`server is running on port 3000`);
});
