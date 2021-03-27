import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
      <section className='mainHomepage'>
        <h1>Frontend Interview Flashcards</h1>
        <h2>Choose your interview path below</h2>
        <Link to='/behavioral'>
            <button>Behavioral</button>
        </Link>
        <Link to='/technical'>
            <button>Technical</button>
        </Link>
      </section>
    )
}

export default Home