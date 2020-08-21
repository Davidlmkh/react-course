import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("root"));

console.log(process.env.REACT_APP_API_URL);
