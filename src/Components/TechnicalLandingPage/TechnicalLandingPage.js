import React from 'react'
import "./TechnicalLandingPage.css"
import { Link } from 'react-router-dom' 

const TechnicalLandingPage = ({ category }) => {
    return (
      <div className="flashcardsContainer">
        <h2 className="subCategoryTitle">
          Pick a topic to generate interview questions
        </h2>
        <div className="buttonContainer">
          <Link to={`${category}/htmlCSS`}>
            <button className="subCategoryButton">HTML/CSS</button>
          </Link>
          <Link to={`${category}/computerScience`}>
            <button className="subCategoryButton">Computer Science</button>
          </Link>
          <Link to={`${category}/javascript`}>
            <button className="subCategoryButton">JavaScript</button>
          </Link>
          <Link to={`${category}/react`}>
            <button className="subCategoryButton">React</button>
          </Link>
        </div>
      </div>
    );
};

export default TechnicalLandingPage

//needs some sort of conditional to render either behavioral or technical

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