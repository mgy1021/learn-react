import { ChangeEvent, useState, useRef, useEffect } from "react";
// import Calendar from "./Calendar-unControlled";
// import Calendar from "./Calendar-Controlled";
import Calendar from "./Calendar";

function App() {
  const [value, setValue] = useState<Date>(new Date("2025-5-1"));

  function onChange(date: Date) {
    setValue(date);
  }

  // return <Calendar defaultValue={new Date("2025-5-1")} onChange={onChange} />;
  return <Calendar value={value} onChange={onChange} />;
}

export default App;
