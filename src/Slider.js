import React from "react";

const Slider = props => {
  return (
    <div className="card-container">
      {props.cards.map((item, i) =>
        props.imagesToShow + props.imagesToRun > i && i >= props.imagesToRun ? (
          <div className="card" key={i}>
            <span className="icon">{i}</span>
            <div className="head">{item.name}</div>
            <div className="body">{item.description}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Slider;
