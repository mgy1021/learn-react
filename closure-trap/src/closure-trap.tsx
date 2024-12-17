import React, { useState, useEffect, useReducer, Reducer, useRef } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
}

function App() {
  const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(count);
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  // 解法一：
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []);

  // 解法一：useReducer
  // useEffect(() => {
  //   setInterval(() => {
  //     dispatch({ type: "add", num: count + 1 });
  //   }, 1000);
  // }, []);

  // 解法二：[]
  // useEffect(() => {
  //   console.log(count);

  //   const timer = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [count]);

  // 解法三：useRef
  const updateCount = () => {
    setCount(count + 1);
  };

  const ref = useRef(updateCount);

  ref.current = updateCount;

  useEffect(() => {
    const timer = setInterval(() => ref.current(), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return <div className="App">{count}</div>;
}

export default App;
