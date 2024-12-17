import React, { useReducer, Reducer } from "react";
import { produce } from "immer";

interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return produce(state, (draftState) => {
        draftState.a.c.e += action.num;
      });
    case "minus":
      return {
        ...state,
        a: {
          ...state.a,
          c: {
            ...state.a.c,
            e: state.a.c.e - action.num,
          },
        },
      };
  }
  return state;
}

function App() {
  const [res, dispath] = useReducer<Reducer<Data, Action>>(reducer, {
    a: {
      c: {
        e: 1,
        f: 7,
      },
      d: 4,
    },
    b: 2,
  });

  return (
    <div>
      <div onClick={() => dispath({ type: "add", num: 2 })}>➕</div>
      <div onClick={() => dispath({ type: "minus", num: 1 })}>➖</div>
      <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App;
