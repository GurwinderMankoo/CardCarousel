import React from "react";

const LeftArrow = props => {
  return (
    <span className="left-arrow" onClick={props.click}>
      &#8826;
    </span>
  );
};

export default LeftArrow;
