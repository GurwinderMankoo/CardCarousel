import React from "react";

const Dots = ({ cards, numberOfDots, activeDot, changeTo }) => {
  // const totalNoOfImages = cards.length;

  return (
    <ul className="dot-container">
      {cards.map((item, i) => {
        if (i < numberOfDots) {
          return (
            <li key={i} onClick={() => changeTo(i)}>
              <span
                className={`inner-dots ${i === activeDot ? "active" : null}`}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Dots;
