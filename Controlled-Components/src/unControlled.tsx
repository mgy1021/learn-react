import { ChangeEvent, useState, useRef, useEffect } from "react";

function App() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("rendering...");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  return <input type="text" value={value} onChange={onChange} />;
}

export default App;
