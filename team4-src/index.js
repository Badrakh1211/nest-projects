import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Page3 from "./badrakh/page3";
import Information  from "./pages/post-page-p2";
import Page1 from "./tuguldur/page1";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Change it to ur page name to see ur project*/}
    <Page3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
