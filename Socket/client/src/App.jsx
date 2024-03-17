import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("welcome", (e) => {
      console.log(e);
    });
  }, []);
  return <></>;
}

export default App;
