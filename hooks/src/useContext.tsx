import React, { createContext, useContext } from "react";

const countContext = createContext(111);

console.log(countContext, "countContext");

function App() {
  return (
    <div>
      <countContext.Provider value={222}>
        <ChildrenB />
      </countContext.Provider>
    </div>
  );
}

function ChildrenB() {
  return (
    <div>
      <ChildrenC />
    </div>
  );
}

function ChildrenC() {
  const count = useContext(countContext);

  return <div>context的值为：{count}</div>;
}

export default App;
