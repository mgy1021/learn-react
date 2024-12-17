import React, { useRef, useEffect, useState, useImperativeHandle } from "react";

interface RefProps {
  focus: () => void;
}

const Children: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    [inputRef]
  );

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

const WrapedChildren = React.forwardRef(Children);

function App() {
  const inputRef = useRef<RefProps>(null);
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
