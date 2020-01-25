import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Dots from "./Dot";

import "./styles.css";

const cards = [
  {
    id: 0,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 1,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 2,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 3,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 4,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 5,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 6,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 7,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 8,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 9,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 10,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 11,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 12,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 13,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 14,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 15,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 16,
    name: "Title",
    description: "All content related to card will go here"
  },
  {
    id: 17,
    name: "Title",
    description: "All content related to card will go here"
  }
];

const total_images = cards.length;

const numberOfImagesRunAtATime = 1;
const numberOfImages = 3;

const noOfDots = Math.ceil(
  (cards.length - numberOfImages) / numberOfImagesRunAtATime + 1
);

export default function App() {
  const [runningImages, setRunningImages] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const timer = setTimeout(nextCardHandler, 3000);
    return () => clearTimeout(timer);
  });

  const nextCardHandler = () => {
    if (runningImages >= total_images - numberOfImages) {
      setRunningImages(0);
      setActiveDot(0);
    } else {
      setRunningImages(runningImages + numberOfImagesRunAtATime);
      setActiveDot(activeDot + 1);
    }
  };

  const previousCardHandler = () => {
    if (runningImages <= 0) {
      setRunningImages(
        noOfDots * numberOfImagesRunAtATime - numberOfImagesRunAtATime
      );
      setActiveDot(noOfDots - 1);
    } else {
      setRunningImages(runningImages - numberOfImagesRunAtATime);
      setActiveDot(activeDot - 1);
    }
  };

  const changeDot = indx => {
    setActiveDot(indx);
    setRunningImages(numberOfImagesRunAtATime * indx);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="outer-container">
        <LeftArrow click={previousCardHandler} />
        <RightArrow click={nextCardHandler} />
        <Slider
          cards={cards}
          imagesToShow={numberOfImages}
          imagesToRun={runningImages}
        />
        <Dots
          cards={cards}
          numberOfDots={noOfDots}
          activeDot={activeDot}
          changeTo={changeDot}
        />
      </div>
    </div>
  );
}
