import React, { ComponentProps, HTMLAttributes } from "react";
import "./App.css";

interface CccProps extends ComponentProps<"a"> {}

function Ccc(props: CccProps) {
  return <div>Ccc</div>;
}

function App() {
  return (
    <div className="App">
      <Ccc href=""></Ccc>
    </div>
  );
}

export default App;
