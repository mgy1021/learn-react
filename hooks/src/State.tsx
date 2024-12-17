import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(() => {
    const num1: number = 1 + 2;
    const num2: number = 2 + 3;
    return num1 + num2;
  });

  return <div onClick={() => setNum((num) => num + 1)}>{num}</div>;
}

export default App;
