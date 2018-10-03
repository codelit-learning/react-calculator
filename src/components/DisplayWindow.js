import React from "react";

const DisplayWindow = props => (
  <input type="text" value={props.expression} disabled="true" className="key display" />
);

export default DisplayWindow;
