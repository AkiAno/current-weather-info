import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./index.html";
import Search from "./search/search.jsx";

class App extends React.Component {
  render() {
    return <Search />;
  }
}

render(<App />, document.querySelector("#app"));
