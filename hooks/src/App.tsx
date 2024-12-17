import React, { memo, useState, useEffect, useCallback, useMemo } from "react";

interface ChildrenBProps {
  count: number;
  callback: () => void;
}

function App() {
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  const callback = useCallback(() => {}, []);

  const count = useMemo(() => {
    return num * 10;
  }, [num]);

  return (
    <div>
      <MemoChildrenB count={count} callback={callback} />
    </div>
  );
}

function ChildrenB(props: ChildrenBProps) {
  console.log("rendering ChildrenB");
  return <div>ChildrenB</div>;
}

const MemoChildrenB = memo(ChildrenB);

export default App;
