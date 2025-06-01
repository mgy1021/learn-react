import React from "react";
import "./App.css";
import Calendar from "./Calendar/index.tsx";
import dayjs from "dayjs";

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2023-11-21")}></Calendar>
    </div>
  );
}

export default App;
