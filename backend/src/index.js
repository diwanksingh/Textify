import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors"
import { app,server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT
const Pathway =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : process.env.FRONTEND_URL;
app.use(cors(
{
  origin:Pathway,
  credentials: true,
 }
))
    
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});


server.listen(PORT, () => {
  console.log("Server running on PORT: " + PORT);
  connectDB();
});
console.log("FRONTEND_URL:"+Pathway);
