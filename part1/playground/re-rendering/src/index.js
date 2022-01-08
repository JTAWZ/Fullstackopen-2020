import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// let counter = 1;

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
// };

// Every one sec it will re-render the page
//Making repeated calls to the ReactDOM.render method is not the recommended way to re-render components. Next, we'll introduce a better way of accomplishing this effect.

// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);
