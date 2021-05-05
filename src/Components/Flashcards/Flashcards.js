import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Flashcards.css";
import Card from "../Card/Card";
import { Redirect } from 'react-router-dom'; 

const Flashcards = ({
  flashcards,
  subCategory,
  getFlashcardIndex,
}) => {
  const [currentCard, setCurrentCard] = useState({});
  const [categoryCards, setCategoryCards] = useState([]);
  const [lastCard, setLastCard] = useState(false);
  
  const findCategoryCard = (subCat) => {
     return flashcards.find((card) => card.subCategory === subCat)
  }

  const lastQuestion = categoryCards[categoryCards.length - 1];

  useEffect(() => {
    if (subCategory === "htmlCSS") {
      setCategoryCards(
        flashcards.filter((card) => card.subCategory === "htmlCSS")
        );
        console.log(currentCard)
        setCurrentCard(findCategoryCard("htmlCSS"));
    } else if (subCategory === "computerScience") {
      setCategoryCards(
        flashcards.filter(
          (card) => card.subCategory === "General Computer Science"
        )
      );
      setCurrentCard(findCategoryCard('General Computer Science'));
    } else if (subCategory === 'javaScript') {
        setCategoryCards(
          flashcards.filter((card) => card.subCategory === "JavaScript")
        );
        setCurrentCard(findCategoryCard('JavaScript'));
    } else if (subCategory === 'react') {
        setCategoryCards(
          flashcards.filter((card) => card.subCategory === "React")
        );
        setCurrentCard(findCategoryCard('React'));
    }
  }, []);

  const displayFlashCard = () => {
    return currentCard.question;
  };

  const selectNextFlashcard = () => {
     const nextCard = getFlashcardIndex(currentCard.id, categoryCards) + 1;
     setCurrentCard(categoryCards[nextCard]);
     displayStartButton()
    }
    
    const displayStartButton = () => {
        const nextToLastCard = getFlashcardIndex(lastQuestion.id, categoryCards) - 1;
        if (categoryCards[nextToLastCard].id === currentCard.id) {
            setLastCard(true)
        }
  }

  const startOver = () => {
      if (lastQuestion.id === currentCard.id) {
          setCurrentCard(findCategoryCard(subCategory));
          setLastCard(false);
        }
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
        {!lastCard &&
        <> 
        <img src={leftArrow} alt="left-arrow" className="left-arrow" />
        <img
          src={rightArrow}
          alt="right-arrow"
          className="right-arrow"
          onClick={() => selectNextFlashcard()}
        />
        </>
        }
      </span>
      {lastCard && 
      <button onClick={startOver}>Start Over</button>
      }
    </div>
  );
};

export default Flashcards;


// on left arrow, needs to be a click to update the cards with the next set of cards
// right arrow, needs to be a click to update the cards with the next set of cards
