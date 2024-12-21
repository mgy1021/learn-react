import React, {
  JSX,
  useState,
  useRef,
  PropsWithChildren,
  CSSProperties,
} from "react";
import "./App.css";

interface CccProps {
  color: CSSProperties["color"];
  styles?: CSSProperties;
}

function Ccc(props: CccProps) {
  return <div>Color:{props.color}</div>;
}

function App() {
  return (
    <div className="App">
      <Ccc color="re" styles={{ backgroundColor: "red" }}></Ccc>
    </div>
  );
}

export default App;
