import React from "react";

const RightArrow = props => {
  return (
    <span className="right-arrow" onClick={props.click}>
      &#8827;
    </span>
  );
};

export default RightArrow;
