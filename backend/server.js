import express from "express";
import mongoose from "mongoose";
import branchRoute from "./routes/branch.routes.js";
import messageRoute from "./routes/message.routes.js";
import cors from "cors";


const app = express();
const Port = 8080;


const connect = async () => {
    try {
      await mongoose.connect('mongodb+srv://devna:diya@cluster0.3pureig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };


app.use(cors({ origin: "http://localhost:5173", credentials: true })); //cors address
app.use(express.json());

app.use("/api/branches", branchRoute);
app.use("/api/message", messageRoute);

app.listen(Port, () => {
    connect();
    console.log(`Backend server is running! on port ${Port}`);
  });
