import './App.css'
import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import { Route, Switch } from 'react-router-dom'
import Flashcards from '../Flashcards/Flashcards'
import flashcardsData from '../../Data/flashcardsData.json'

const App = () => {
  const [flashcards, setFlashcards] = useState([flashcardsData])

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
            return <Flashcards />
          }
        }}
        />
     </Switch>

   </main>
  )
}

export default App
