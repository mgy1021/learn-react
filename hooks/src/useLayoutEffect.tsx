import React, { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  async function queryData() {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 3000);
    });

    return data;
  }

  // useEffect(() => {
  //   console.log("xxx");
  //   queryData().then((data) => {
  //     setNum(data + num2);
  //   });
  // }, [num2]);

  useLayoutEffect(() => {
    console.log("xxx");
    queryData().then((data) => {
      setNum(data + num2);
    });
  }, [num2]);

  return <div onClick={() => setNum2((num) => num + 1)}>{num}</div>;
}

export default App;
