import React from "react";
import DisplayWindow from "./DisplayWindow";
import Button from "./Button";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      expression: ""
    };

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
  }

  onKeyPressed(text) {
    this.setState(prev => ({
      expression: prev.expression + text
    }));
  }

  onEvaluatePressed() {
    const result = eval(this.state.expression);
    result && this.setState({ expression: result.toString() });
  }

  onDeletePressed() {
    this.setState(prev => ({
      expression:
        prev.expression.length <= 1 ? "" : prev.expression.slice(0, -1)
    }));
  }

  render() {
    let numberKeys = [];
    for (let i = 0; i < 10; i++) {
      numberKeys.push(<Button text={i} onKeyPressed={this.onKeyPressed} />);
    }

    return (
      <div className="container">
        <DisplayWindow expression={this.state.expression} />
        <div className="key-container">
          {numberKeys}
          <Button text="+" onKeyPressed={this.onKeyPressed} />
          <Button text="-" onKeyPressed={this.onKeyPressed} />
          <Button text="*" onKeyPressed={this.onKeyPressed} />
          <Button text="/" onKeyPressed={this.onKeyPressed} />
          <Button text="C" onKeyPressed={this.onDeletePressed} />
          <button onClick={this.onEvaluatePressed} className="key">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
