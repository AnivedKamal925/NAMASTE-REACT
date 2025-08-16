import React from "react";
import ReactDOM from  "react-dom/client";


const jsxHeading = <h1 className="heading">Namaste React 💻 using JSX which is HTML or XML like syntax </h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);