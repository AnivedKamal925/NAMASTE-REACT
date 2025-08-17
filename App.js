import React from "react";
import ReactDOM from  "react-dom/client";

const heading = (
    <h1 className="heading">Namaste React 💻 using React Component </h1 >
);

const Title = () =>(
    <div>
        {heading}
    <h2 className="title"> React Title Component using JSX ❤️</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title());