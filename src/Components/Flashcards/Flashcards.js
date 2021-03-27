import React from 'react'
import './Flashcards.css'
import Card from '../Card/Card' 

const Flashcards = ({ flashcards, category }) => {
    const technicalFlashcards = flashcards.filter(card => card.category === 'technical')
    const behavioralFlashcards = flashcards.filter(card => card.category === 'behavioral')

    const displayFlashcards = (list) => {
       return list.map(flashcard => {
            return <Card 
            id={flashcard.id}
            key={flashcard.id}
            question={flashcard.question}
        />
        }) 
    }

    return (
        <div className='flashcardsContainer'>
            {category === 'technical' ? displayFlashcards(technicalFlashcards) :
                displayFlashcards(behavioralFlashcards)
            }
        </div>
    )
}

export default Flashcards