import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Flashcards.css";
import Card from "../Card/Card";

const Flashcards = ({
  flashcards,
  subCategory,
  category,
  getFlashcardIndex,
}) => {
  const [currentCard, setCurrentCard] = useState({});
  const [categoryCards, setCategoryCards] = useState([]);
  let htmlCSS = flashcards.find((card) => card.subCategory === "HTML/CSS");

  useEffect(() => {
    if (subCategory === "htmlCSS") {
      setCategoryCards(
        flashcards.filter((card) => card.subCategory === "HTML/CSS")
      );
      setCurrentCard(htmlCSS);
    }
  }, []);

  const displayFlashCard = () => {
    return currentCard.question;
  };

  const selectNextFlashcard = () => {
     let nextCard = getFlashcardIndex(currentCard.id, categoryCards) + 1;
     setCurrentCard(categoryCards[nextCard]);
  }

  const startOver = () => {
      const lastIndex = categoryCards[categoryCards.length - 1]
      
  }

  // based upon whatevery subCategory I pick, I want to display the cards that align with that category
  // get the property of the card, filter by that and return the array that matches
  // then when I click the next button it goes to the next question
  // first question back arrow should be disabled
  // last question front arrow should be disabled
  //   return flashcards.filter((card) => {
  //     if (card.subCategory === subCat) {
  //       return <Card key={card.id} question={card.question} />;
  //     }
  //   });

  return (
    <div className="flashcardsContainer">
      <p>{displayFlashCard()}</p>
      <span className="arrowStyling">
        <img src={leftArrow} alt="left-arrow" className="left-arrow" />
        <img
          src={rightArrow}
          alt="right-arrow"
          className="right-arrow"
          onClick={() => selectNextFlashcard()}
        />
      </span>
      <button onClick={startOver}>Start Over</button>
    </div>
  );
};

export default Flashcards;

// when you get to the last card, the right arrow button becomes disabled and there is a button called start over

// on left arrow, needs to be a click to update the cards with the next set of cards
// right arrow, needs to be a click to update the cards with the next set of cards
