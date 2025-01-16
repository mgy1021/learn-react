import { ChangeEvent, useState, useRef, useEffect } from "react";
// import Calendar from "./Calendar-unControlled";
// import Calendar from "./Calendar-Controlled";
import Calendar from "./Calendar";
import { ControlledInput, Input, UnControlledInput } from "./Input";

function App() {
  const [value, setValue] = useState<Date>(new Date("2025-5-1"));
  const [inputValue, setInputValue] = useState<string>("");

  function onChange(date: Date) {
    setValue(date);
  }

  function onInputChange(value: string) {
    setInputValue(value);
    console.log(value);
  }

  // return <Calendar defaultValue={new Date("2025-5-1")} onChange={onChange} />;
  return (
    <div>
      <Calendar value={value} onChange={onChange} />
      <ControlledInput value={inputValue} onChange={onInputChange} />
      <br />
      <UnControlledInput defaultValue={"inputValue"} onChange={onInputChange} />
      <br />
      <Input />
    </div>
  );
}

export default App;
