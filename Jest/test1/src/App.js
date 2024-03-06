import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Use Case"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
