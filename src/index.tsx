import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); *** NOTE - not sure how I fixed this but replacing it w/ randomiser project
// version, so check with someone for understanding ***

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
