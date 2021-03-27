import React from 'react'
import './Flashcards.css'
import Card from '../Card/Card'
import { Link } from 'react-router-dom' 

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
            <div className="flashcardsContainer">
            <h2 className='subCategoryTitle'>Pick a topic to generate interview questions</h2>
                <div className='buttonContainer'>
                    <Link to="/:id">
                    <button className="subCategoryButton">HTML/CSS</button>
                    </Link>
                    <Link to="/:id">
                    <button className="subCategoryButton">
                        Generic Computer Science
                    </button>
                    </Link>
                    <Link to="/:id">
                    <button className="subCategoryButton">JavaScript</button>
                    </Link>
                    <Link to="/:id">
                    <button className="subCategoryButton">React</button>
                    </Link>
                </div>
            </div>
    )
}

export default Flashcards


//  const technicalFlashcards = flashcards.filter(card => card.category === 'technical')
//     const behavioralFlashcards = flashcards.filter(card => card.category === 'behavioral')

//     const displayFlashcards = (list) => {
//        return list.map(flashcard => {
//             return <Card 
//             id={flashcard.id}
//             key={flashcard.id}
//             question={flashcard.question}
//         />
//         }) 
//     }

//     return (
//         <div className='flashcardsContainer'>
//             {category === 'technical' ? displayFlashcards(technicalFlashcards) :
//                 displayFlashcards(behavioralFlashcards)
//             }
//         </div>
//     )
// }