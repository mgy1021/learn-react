import React, { MouseEvent } from "react";
import "./App.css";

// interface CccProps {
//   clickHandler: MouseEventHandler<HTMLDivElement>;
// }

interface CccProps {
  clickHandler: (e: MouseEvent<HTMLDivElement>) => void;
}

function Ccc(props: CccProps) {
  return <div onClick={props.clickHandler}>Ccc</div>;
}

function App() {
  return (
    <div className="App">
      <Ccc
        clickHandler={(e) => {
          console.log(e);
        }}
      ></Ccc>
    </div>
  );
}

export default App;
