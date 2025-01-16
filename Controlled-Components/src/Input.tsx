import { useState } from "react";

interface InputProps {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string) => void;
}

// 受控模式
function ControlledInput(props: InputProps) {
  const { value: propsValue, onChange } = props;

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return <input value={propsValue} type="text" onChange={changeValue} />;
}

// 非受控组件
function UnControlledInput(props: InputProps) {
  const { defaultValue, onChange } = props;

  const [value, setValue] = useState("");

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setValue(e.target.value);
  }

  return <input value={defaultValue} onChange={changeValue} type="text" />;
}

// 同时兼容两种模式
function Input(props: InputProps) {
  const { value: propsValue, defaultValue, onChange } = props;

  const [value, setValue] = useState<string | number>(defaultValue!);

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    if (propsValue === undefined) {
      setValue(e.target.value);
    }
  }

  const mergeValue = propsValue != undefined ? propsValue : value;

  return <input type="text" value={mergeValue} onChange={changeValue} />;
}

export { ControlledInput, UnControlledInput, Input };
