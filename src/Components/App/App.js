import './App.css'
import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import { Route, Switch } from 'react-router-dom'
import TechnicalLandingPage from "../TechnicalLandingPage/TechnicalLandingPage";
import flashcardsData from '../../Data/flashcardsData.json'
// import Card from '../Card/Card'
import Flashcards from '../Flashcards/Flashcards'

const App = () => {
  const [flashcards, setFlashcards] = useState([])


  useEffect(() => {
    setFlashcards(flashcardsData)
  }, [])
  // useEffect to set the flashcards
  // select next card
  // find the index of the card that i have
  // show questin

  // const selectNextCard = () => {

  // }

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
          if (match.params.category === 'behavioral' || 'technical') {
            return <TechnicalLandingPage
            flashcards={flashcards}
            category={match.params.category} 
            />
          }
        }}
        />
      <Route 
      exact path='/:category/:subCategory'
      render={({ match }) => {
        if (match.params.subCategory === 'htmlCSS') {
          return (
            <Flashcards
              flashcards={flashcards}
              category={match.params.category}
              subCategory={match.params.subCategory}
            />
          )
        } else if (match.params.subCategory === 'computerScience') {
          return (
            <Flashcards
              flashcards={flashcards}
              category={match.params.category}
              subCategory={match.params.subCategory}
            />
          )
        } else if (match.params.subCategory === 'javaScript') {
          return (
            <Flashcards
              flashcards={flashcards}
              category={match.params.category}
              subCategory={match.params.subCategory}
            />
          )
        } else if (match.params.subCategory === 'react') {
          return (
            <Flashcards
              flashcards={flashcards}
              category={match.params.category}
              subCategory={match.params.subCategory}
            />
          );
        }
      }}
      />
      {/* <Route 
      exact
      path='/:category:/subCategory/:id'
      render={({ match }) => {
        return <Card id={match.params.id}/>
      }}
      /> */}

     </Switch>

   </main>
  )
}

export default App
