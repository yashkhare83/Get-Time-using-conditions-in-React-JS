import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

let getTime;
if (new Date().getHours() < 13) {
  getTime = "Good Morning";
} else if (new Date().getHours() < 16) {
  getTime = "Good Afternoon";
} else {
  getTime = "Good Night";
}

ReactDOM.render(
  <h1 className="heading">Hello {getTime}</h1>,
  document.getElementById("root")
);
