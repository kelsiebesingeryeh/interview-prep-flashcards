import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import TechnicalLandingPage from '../TechnicalLandingPage/TechnicalLandingPage';
import flashcardsData from '../../Data/flashcardsData.json';
import Flashcards from '../Flashcards/Flashcards';

const App = () => {
  const [flashcards, setFlashcards] = useState(flashcardsData);

  const getFlashcardIndex = (id, list) => list.findIndex((card) => card.id === id);

  return (
   <main>
     <Switch>
        <Route
        exact
        path='/'
        render={() => <Home />}
        />

        <Route 
        exact
        path='/:category'
        render={({ match }) => {
          if (match.params.category === 'technical') {
            return (
              <TechnicalLandingPage
                category={match.params.category}
              />
            );
          }
          else if (match.params.category === 'behavioral') {
            return (
              <Flashcards
                flashcards={flashcards}
                subCategory={match.params.subCategory}
                getFlashcardIndex={getFlashcardIndex}
                category={match.params.category}
              />
            );
          }
        }}
        />
      <Route 
      exact path='/:category/:subCategory'
      render={({ match }) => {
        if (match.params.subCategory === 'htmlCSS' || match.params.subCategory === 'computerScience' || match.params.subCategory === 'javascript' || match.params.subCategory === 'react') {
          return (
            <Flashcards
              flashcards={flashcards}
              subCategory={match.params.subCategory}
              getFlashcardIndex={getFlashcardIndex}
              category={match.params.category}
            />
          );
        }
      }}
      />
     </Switch>
   </main>
  )
}

export default App;
