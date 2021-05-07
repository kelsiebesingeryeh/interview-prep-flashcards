import React, { useEffect, useState } from "react";
import "./Flashcards.css";
import { Link } from 'react-router-dom';

const Flashcards = ({
  flashcards,
  subCategory,
  getFlashcardIndex,
}) => {
  const [categoryCards, setCategoryCards] = useState(
    flashcards.filter((card) => card.subCategory === subCategory)
    );
  const [currentCard, setCurrentCard] = useState(categoryCards[0]);
  const [lastCard, setLastCard] = useState(false);
  const [firstCard, setFirstCard] = useState(true);
  
//   const findCategoryCard = (subCat) => {
//      return flashcards.find((card) => card.subCategory === subCat)
//   }

  const lastQuestion = categoryCards[categoryCards.length - 1];
      
      const displayFlashCard = () => {
      return currentCard.question;
  };

  const selectNextFlashcard = () => {
     const nextCard = getFlashcardIndex(currentCard.id, categoryCards) + 1;
     setCurrentCard(categoryCards[nextCard]);
     setFirstCard(false);
     displayStartButton();
    }

    // list.findIndex((card) => card.id === id);
    
    const displayStartButton = () => {
        const nextToLastCard = getFlashcardIndex(lastQuestion.id, categoryCards) - 1;
        if (categoryCards[nextToLastCard].id === currentCard.id) {
            setLastCard(true);
        }
  }

  const startOver = () => {
      if (lastQuestion.id === currentCard.id) {
          setCurrentCard(categoryCards[0]);
          setLastCard(false);
          setFirstCard(true);
        }
  }

  const selectLastFlashcard = () => {
      console.log('currentcard', currentCard.id)
      const lastCard = getFlashcardIndex(currentCard.id, categoryCards);
      setCurrentCard(categoryCards[lastCard - 1]);
    }
    
    
    //   if (firstQuestion.id === currentCard.id) //setFirstCard(true);
    //   }
  // TO DO
  // first question back arrow should be disabled
  // add functionality to go back one
  // maybe add overall button that takes you back to home or categories page

  return (
    <div className="flashcardsContainer">
      <p>{displayFlashCard()}</p>
      <span className="arrowStyling">
        {!lastCard && (
          <>
            <button
              type="submit"
              alt="left-arrow"
              className={`left-arrow ${firstCard ? 'disabled' : ''}`}
              disabled={firstCard ? true : false}
              onClick={() => selectLastFlashcard()}
            ></button>
            <button
              type="submit"
              alt="right-arrow"
              className="right-arrow"
              onClick={() => selectNextFlashcard()}
            ></button>
          </>
        )}
      </span>
      {lastCard && (
        <>
          <Link to="/technical">
            <button>Back to Categories</button>
          </Link>
          <button onClick={startOver}>Start Over</button>
        </>
      )}
    </div>
  );
};

export default Flashcards;


// on left arrow, needs to be a click to update the cards with the next set of cards
// right arrow, needs to be a click to update the cards with the next set of cards
