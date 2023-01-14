import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

const NewApp = () => {
  return (
    <>
      <h2>This is React App</h2>
      <h1>Hello</h1>;
    </>
  );
};

root.render(<NewApp />);
