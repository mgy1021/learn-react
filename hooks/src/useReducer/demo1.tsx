import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return {
        name: state.name,
        age: state.age + 1,
      };
    case "changed_name":
      return {
        name: action.nextName,
        age: state.age,
      };
    default:
      throw Error("Unknow action：" + action.type);
  }
}

const initialState = { name: "Mgy", age: 25 };

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(event) {
    dispatch({ type: "changed_name", nextName: event.target.value });
  }

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  return (
    <>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello,{state.name}. You are {state.age}.
      </p>
    </>
  );
}
