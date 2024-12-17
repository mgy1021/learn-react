import React, { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState(0);

  async function queryData() {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 3000);
    });

    return data;
  }

  useEffect(() => {
    // queryData().then((data) => {
    //   setNum(data);
    // });
    let timer = setInterval(() => {
      console.log(num);
    }, 1000);

    return () => {
      console.log("clean up!!");
      clearInterval(timer);
    };
  }, [num]);

  return <div onClick={() => setNum((num) => num + 1)}>{num}</div>;
}

export default App;
