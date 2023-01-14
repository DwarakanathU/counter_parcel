import React, { useState } from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const NewApp = () => {
  const [count, setCount] = useState(0); // initializing count varaible with intial value 0 using useState

  // Defining Increment function for counter

  const IncrementByOne = () => {
    setCount(count + 1);
  };

  // Defining Increment function for counter

  const DecrementByOne = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={IncrementByOne}>+</button>
      <span>{count}</span>
      <button onClick={DecrementByOne}>-</button>
    </>
  );
};

root.render(<NewApp />);
