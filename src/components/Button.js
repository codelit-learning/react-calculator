import React from "react";

class Button extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onKeyPressed(this.props.text);
  }

  render() {
    return <button onClick={this.onClick} className="key">{this.props.text}</button>;
  }
}

export default Button;
