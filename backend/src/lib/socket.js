import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const Pathway =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : process.env.FRONTEND_URL;

const io = new Server(server, {
  cors: {
    origin:Pathway, // Allow your frontend URL
  },
});

export function getReceiverSocketId (userId) {
  return userSocketMap[userId]
}

const userSocketMap={}

io.on("connection", (socket) => {
  console.log("Mywebuser connected:", socket.id);
  const userId=socket.handshake.query.userId
 if(userId){
  userSocketMap[userId]=socket.id

 }
 io.emit("getOnlineUsers",Object.keys(userSocketMap));//send an event to all connected users


  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("Mywebuser disconnected",socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
  });
});

// Export the `io`, `app`, and `server`
export { io, app, server };
