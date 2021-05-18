import React, { useState } from 'react';
import './Flashcards.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backArrow from '../../assets/backArrow.png';

const Flashcards = ({
  flashcards,
  subCategory,
  getFlashcardIndex,
  category,
}) => {
  const [categoryCards] = useState(flashcards.filter((card) => card.subCategory === subCategory));

  const [currentCard, setCurrentCard] = useState(categoryCards[0]);
  const [lastCard, setLastCard] = useState(false);
  const [firstCard, setFirstCard] = useState(true);

  const lastQuestion = categoryCards[categoryCards.length - 1];
  const firstQuestion = categoryCards[0];

  const displayStartButton = () => {
    const nextToLastCard = getFlashcardIndex(lastQuestion.id, categoryCards) - 1;
    if (categoryCards[nextToLastCard].id === currentCard.id) {
      setLastCard(true);
    }
  };
  const selectNextFlashcard = () => {
    const nextCardIndex = categoryCards.findIndex((card) => card.id === currentCard.id) + 1;
    setCurrentCard(categoryCards[nextCardIndex]);
    setFirstCard(false);
    displayStartButton();
  };

  const startOver = () => {
    if (lastQuestion.id === currentCard.id) {
      setCurrentCard(categoryCards[0]);
      setLastCard(false);
      setFirstCard(true);
    }
  };

  const selectLastFlashcard = () => {
    const lastCardIndex = getFlashcardIndex(currentCard.id, categoryCards);
    const nextToFirstCard = getFlashcardIndex(firstQuestion.id, categoryCards) + 1;
    setCurrentCard(categoryCards[lastCardIndex - 1]);
    if (categoryCards[nextToFirstCard].id === currentCard.id) {
      setFirstCard(true);
    }
  };

  return (
    <>
      <div className="flashcardsContainer">
        <div className="backButton">
          <Link
            to={
              (category === 'technical')
                ? '/technical'
                : '/'
            }
          >
            <img src={backArrow} alt="back-arrow" />
          </Link>
        </div>
        <p className="question">{currentCard.question}</p>
        <span className="arrowStyling">
          {!lastCard && (
            <>
              <button
                type="submit"
                alt="left-arrow"
                className={`left-arrow ${firstCard ? 'disabled' : ''}`}
                disabled={firstCard}
                onClick={() => selectLastFlashcard()}
              />
              <button
                type="submit"
                alt="right-arrow"
                className="right-arrow"
                onClick={() => selectNextFlashcard()}
              />
            </>
          )}
        </span>
        {lastCard && (
          <span className="arrowStyling">
            <Link to="/technical">
              <button type="submit">Back to Categories</button>
            </Link>
            <button onClick={startOver} type="submit">
              Start Over
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default Flashcards;

Flashcards.propTypes = {
  flashcards: PropTypes.arrayOf.isRequired,
  subCategory: PropTypes.string.isRequired,
  getFlashcardIndex: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
