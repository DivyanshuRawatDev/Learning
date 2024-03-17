import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

function App() {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");

  const socket = useMemo(() => io("http://localhost:3000"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
  };

  useEffect(() => {
    socket.on("connect", () => {
      setRoom(room);
      console.log("Connected", socket.id);
    });

    // socket.on("welcome", (e) => {
    //   console.log(e);
    // });

    socket.on("recive-message", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <Typography varient="h1" component="div" gutterBottom>
          Welcome to socket io
        </Typography>

        <Typography varient="h1" component="div" gutterBottom>
          {socket.id}
        </Typography>

        <form onSubmit={joinRoomHandler}>
          <h5>Join Room</h5>
          <TextField
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            id="outlined-basic"
            label="Room Name"
            varient="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Join
          </Button>
        </form>

        <form onSubmit={handleSubmit}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="outlined-basic"
            label="Message"
            varient="outlined"
          />
          <TextField
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            id="outlined-basic"
            label="Room"
            varient="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>

        <Stack>
          {messages.map((m, i) => {
            return (
              <Typography key={i} variant="h6" component="div" gutterBottom>
                {m}
              </Typography>
            );
          })}
        </Stack>
      </Container>
    </>
  );
}

export default App;
