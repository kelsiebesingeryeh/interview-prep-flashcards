import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Flashcards.css";
import Card from "../Card/Card";

const Flashcards = ({ flashcards, subCategory, category }) => {
  const [currentCard, setCurrentCard] = useState({})
  let htmlCSS = flashcards.find((card) => card.subCategory === "HTML/CSS"
  );

  useEffect(() => {
      if (subCategory === 'htmlCSS') {
         return setCurrentCard(htmlCSS);
      }
  }, [])

  const displayFlashCard = () => {
      return currentCard.question
  }



  // const htmlCSSFlashcards = flashcards.filter(card => card.subCategory === 'HTML/CSS')
  // flashcards is an array of objects
  // subcategory is HTML, CS, JS, React
  // category- technical or behvavorial

  // const filterFlashCards = (cat) => {
  //     return flashcards.filter((card) => card.category === cat)
  // }

  //

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
        <img src={leftArrow} alt="left-arrow" />
        <img src={rightArrow} alt="right-arrow" />
      </span>
    </div>
  );
};

export default Flashcards;

// on left arrow, needs to be a click to update the cards with the next set of cards
// right arrow, needs to be a click to update the cards with the next set of cards
