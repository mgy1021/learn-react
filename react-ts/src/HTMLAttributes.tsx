import React, { HTMLAttributes } from "react";
import "./App.css";

interface CccProps extends HTMLAttributes<HTMLAnchorElement> {}

function Ccc(props: CccProps) {
  return <div>Ccc</div>;
}

function App() {
  return (
    <div className="App">
      <Ccc onClick={(e) => {}}></Ccc>
    </div>
  );
}

export default App;
