import React, { memo, useState, useEffect } from "react";

interface ChildrenBProps {
  count: number;
}

function App() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  return (
    <div>
      <MemoChildrenB count={num} />
    </div>
  );
}

function ChildrenB(props: ChildrenBProps) {
  console.log("rendering ChildrenB");
  return <div>ChildrenB</div>;
}

const MemoChildrenB = memo(ChildrenB);

export default App;
