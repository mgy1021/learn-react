import React, { useRef, useEffect, useState } from "react";

const Children: React.ForwardRefRenderFunction<HTMLInputElement> = (
  props,
  ref
) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};

const WrapedChildren = React.forwardRef(Children);

function App() {
  const inputRef = useRef<HTMLInputElement>();
  const numRef = useRef<number>(0);
  const [, forceRender] = useState<number>(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <WrapedChildren ref={inputRef} />
      <div
        onClick={() => {
          numRef.current += 1;
          forceRender(Math.random());
        }}
      >
        {numRef.current}
      </div>
    </div>
  );
}

export default App;
