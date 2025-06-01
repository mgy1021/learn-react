import { useTransition } from "react";
import React from "react";

export default function TabButton({ action, children, isActive }) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          action();
        });
      }}
    >
      {children}
    </button>
  );
}
