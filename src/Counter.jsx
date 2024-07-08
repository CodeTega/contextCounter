import React, { useState } from "react";
import { UserCount } from "./context/CounterContext";

export default function Counter() {
  const { count, setCount } = UserCount();

  const handleAddOne = () => {
    setCount(count + 1);
    localStorage.setItem("count", count + 1);
  };

  return (
    <div className="centerText">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleAddOne}>Add One</button>
    </div>
  );
}
