import {
  useEffect,
  useState,
  useRef,
  useCallback,
  SetStateAction,
} from "react";

function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { value: propsValue, defaultValue, onChange } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if (defaultValue !== undefined) {
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(propsValue!);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }

  const setState = useCallback(
    (value: SetStateAction<T>) => {
      let res = isFunction(value) ? value(stateValue) : value;

      if (propsValue === undefined) {
        setStateValue(res);
      }

      onChange?.(res);
    },
    [stateValue]
  );

  const mergeValue = propsValue === undefined ? stateValue : propsValue;

  return [mergeValue, setState];
}

export default useMergeState;
