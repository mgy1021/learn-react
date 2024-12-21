import React, { useRef, useEffect, useState, useImperativeHandle } from "react";

interface RefProps {
  focus: () => void;
}

interface ChildrenProps {
  name: string;
}

const Children: React.ForwardRefRenderFunction<RefProps, ChildrenProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle<RefProps, { ccc: string } & RefProps>(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        ccc: "ccc",
      };
    },
    [inputRef]
  );

  return (
    <div>
      <div>{props.name}</div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

const WrapedChildren = React.forwardRef<RefProps, ChildrenProps>(Children);

function App() {
  const inputRef = useRef<RefProps>(null);
  const numRef = useRef<number>(0);
  const [, forceRender] = useState<number>(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <WrapedChildren name="mgy" ref={inputRef} />
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
