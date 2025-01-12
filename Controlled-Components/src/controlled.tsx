import { ChangeEvent, useState, useRef, useEffect } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  // function onChange(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  // }

  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current?.value);
    }, 2000);
  }, []);

  // return <input type="text" defaultValue={"mgy"} onChange={onChange} />;
  return <input type="text" defaultValue={"mgy"} ref={inputRef} />;
}

export default App;
