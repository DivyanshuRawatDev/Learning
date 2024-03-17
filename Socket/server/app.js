import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";
import jwt from "jsonwebtoken";

const port = 3000;

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Running");
});

const secretKey = "asdasdasdasd";
app.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "asssdsasdasd" }, secretKey);
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    })
    .json({
      message: "Login Success",
    });
});

//Middleware :-
io.use((socket, next) => {});

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log(socket.id);

  //   socket.emit("welcome", `Welcome ${socket.id}`); //Perticular person get data we can take exaple of whatsapp when group join it will give us message you joined a group
  //   socket.broadcast.emit("welcome", `Welcome ${socket.id}`); //All other will get message except this one this will send to another one that divyanshu joined the group

  socket.on("message", ({ room, message }) => {
    // console.log(data);
    io.to(room).emit("recive-message", message);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(room);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3000, () => {
  console.log(`Server is running on ${port}`);
});
