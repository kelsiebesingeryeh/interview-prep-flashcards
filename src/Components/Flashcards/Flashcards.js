import React, { useState } from "react";
import "./Flashcards.css";
import { Link } from 'react-router-dom';

const Flashcards = ({
  flashcards,
  subCategory,
  getFlashcardIndex,
}) => {
  const [categoryCards, setCategoryCards] = useState(flashcards.filter((card) => card.subCategory === subCategory));
  const [currentCard, setCurrentCard] = useState(categoryCards[0]);
  const [lastCard, setLastCard] = useState(false);
  const [firstCard, setFirstCard] = useState(true);

  const lastQuestion = categoryCards[categoryCards.length - 1]; 
  const firstQuestion = categoryCards[0]   

  const selectNextFlashcard = () => {
    const nextCardIndex = categoryCards.findIndex(card => card.id === currentCard.id) + 1
     setCurrentCard(categoryCards[nextCardIndex]);
     setFirstCard(false);
     displayStartButton();
    }
    
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
      const lastCard = getFlashcardIndex(currentCard.id, categoryCards);
      const nextToFirstCard =
        getFlashcardIndex(firstQuestion.id, categoryCards) + 1;
      setCurrentCard(categoryCards[lastCard - 1]);
      if (categoryCards[nextToFirstCard].id === currentCard.id) {
        setFirstCard(true);
      }
    }
    
  return (
    <div className="flashcardsContainer">
      <p className='question'>{currentCard.question}</p>
      <span className="arrowStyling">
        {!lastCard && (
          <>
            <button
              type="submit"
              alt="left-arrow"
              className={`left-arrow ${firstCard ? "disabled" : ""}`}
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