import React, { useReducer, Reducer } from "react";

interface Data {
  result: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      state.result = state.result + action.num;
      return state;
    case "minus":
      return {
        result: state.result - action.num,
      };
  }
  return state;
}

function App() {
  const [res, dispath] = useReducer<Reducer<Data, Action>>(reducer, {
    result: 0,
  });

  // const [data, dispath] = useReducer<Reducer<Data, Action>,string>(
  //   reducer,
  //   "zero",
  //   (param) => {
  //     return {
  //       result: param === "zero" ? 0 : 1,
  //     };
  //   }
  // );

  return (
    <div>
      <div onClick={() => dispath({ type: "add", num: 2 })}>➕</div>
      <div onClick={() => dispath({ type: "minus", num: 1 })}>➖</div>
      <div>{res.result}</div>
    </div>
  );
}

export default App;
