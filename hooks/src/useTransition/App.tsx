import React, { useState, useTransition, startTransition } from "react";
import { updateQuantity } from "./api.ts";
import "./App.css";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  //   const [isPending, setIsPending] = useState(false);
  const [isPending, startTransition] = useTransition(false);

  const updateQuantityAction = async (newQuantity) => {
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  return (
    <div className="app">
      <h1>Checkout</h1>
      <Item action={updateQuantityAction}></Item>
      <br />
      <Total quantity={quantity} isPending={isPending}></Total>
    </div>
  );
}

function Item({ action }) {
  function handleChange(event) {
    startTransition(() => {
      action(event.target.value);
    });
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <div>
        <label htmlFor="name">Quantity: </label>
        <input type="number" onChange={handleChange} defaultValue={1} min={1} />
      </div>
    </div>
  );
}

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
      </span>
    </div>
  );
}
