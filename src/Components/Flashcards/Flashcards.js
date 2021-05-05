import React, { useEffect, useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Flashcards.css";
import { Link } from 'react-router-dom';

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
      setCategoryCards(
        flashcards.filter((card) => card.subCategory === subCategory));
        setCurrentCard(findCategoryCard(subCategory));
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


 

  // first question back arrow should be disabled
  // last question front arrow should be disabled

  return (
    <div className="flashcardsContainer">
      <p>{displayFlashCard()}</p>
      <span className="arrowStyling">
        {!lastCard && (
          <>
            <img src={leftArrow} alt="left-arrow" className="left-arrow" />
            <img
              src={rightArrow}
              alt="right-arrow"
              className="right-arrow"
              onClick={() => selectNextFlashcard()}
            />
          </>
        )}
      </span>
      {lastCard && (
        <>
          <button onClick={startOver}>Start Over</button>
          <Link to="/technical">
            <button>Back to Categories</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Flashcards;


// on left arrow, needs to be a click to update the cards with the next set of cards
// right arrow, needs to be a click to update the cards with the next set of cards
