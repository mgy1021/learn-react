import React, { JSX, useState, useRef, PropsWithChildren } from "react";
import "./App.css";

interface AaaProps {
  name: string;
  content: React.ReactNode;
  children: React.ReactNode;
}

type AaaProps2 = PropsWithChildren<{
  content: React.ReactNode;
}>;

// function Aaa(props: AaaProps) {
//   return (
//     <div>
//       {props.name},{props.content}
//     </div>
//   );
// }

const Aaa: React.FunctionComponent<AaaProps> = (props: AaaProps) => {
  return (
    <div>
      {props.name},{props.children}
    </div>
  );
};

function Ccc() {
  const [num, setNum] = useState<number>(1);
  const ref = useRef<{ num: number }>(null);

  ref.current = { num: 8 };

  return <div>Ccc,{num}</div>;
}

const content: JSX.Element = <div>Hello</div>;

function App() {
  return (
    <div className="App">
      {/* <Aaa name="Mgy" content={content || null}></Aaa> */}
      <Aaa name="Mgy">
        <div>Hello</div>
      </Aaa>
    </div>
  );
}

export default App;
