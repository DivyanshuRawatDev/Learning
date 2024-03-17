import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";

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

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log(socket.id);

  socket.emit("welcome", `Welcome ${socket.id}`);
});

server.listen(3000, () => {
  console.log(`Server is running on ${port}`);
});
