import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-header">React Calculator</h2>
        
        <Calculator />
      </div>
    );
  }
}

export default App;
