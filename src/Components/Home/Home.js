import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="mainHomepage">
      <h1>Frontend Interview Flashcards</h1>
      <h2>Choose your interview path below</h2>
      <span className="buttonStyling">
        <Link to="/behavioral">
          <button type="submit" className="behavioralButton">Behavioral</button>
        </Link>
        <Link to="/technical">
          <button type="submit">Technical</button>
        </Link>
      </span>
    </section>
  );
};

export default Home;
