import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Use Case"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        disabled
      />
      <button
        onClick={() => {
          setValue("Updated Value");
        }}
      >
        Update Data
      </button>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
