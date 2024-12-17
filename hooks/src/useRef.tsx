import React, { useRef, useEffect, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>();
  const numRef = useRef<number>(0);
  const [, forceRender] = useState<number>(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <div
        onClick={() => {
          numRef.current += 1;
          forceRender(Math.random());
        }}
      >
        {numRef.current}
      </div>
    </div>
  );
}

export default App;
