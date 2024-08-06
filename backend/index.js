import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js"
import customRoute from "./routes/customData.routes.js"
import authRoutes from "./routes/auth.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption)); 
app.use("/api/v1/user", userRoute)
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/customData',customRoute);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
  connectDB();
});

// app.use("/hamari/api",(req,res) => {
//   return res.status(200).json({
//     "name": "deepak",
//     "email": "kd@gmail.com",
//     "password": "malik123",
//     "phoneNumber": "999911919"
//   })
// })