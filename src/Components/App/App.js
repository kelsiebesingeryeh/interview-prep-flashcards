import './App.css'
import React, { Component } from 'react'
import Home from '../Home/Home'
import { Route } from 'react-router-dom'

const App = () => {
  return (
   <main>
     <Route
     exact
     path='/'
     render={() => <Home />}
     />
   </main>
  )
}

export default App
