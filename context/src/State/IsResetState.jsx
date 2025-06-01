import { useState } from "react";
import "./index.css";

export default function IsResetState() {
  const [show, setShow] = useState(true);
  const counter = <Counter />;

  return (
    <div>
      <div className="container">
        {counter}
        {show && counter}
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        渲染第二个计数器
      </div>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}
