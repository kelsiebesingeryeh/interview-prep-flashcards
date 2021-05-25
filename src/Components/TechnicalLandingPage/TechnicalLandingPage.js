import React from 'react';
import './TechnicalLandingPage.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backArrow from '../../assets/backArrow.png';

const TechnicalLandingPage = ({ category }) => {
  return (
    <>
      <div className="flashcardsContainer">
        <Link to="/">
          <div className="backButton">
            <img src={backArrow} alt="back-arrow" />
          </div>
        </Link>
        <h2 className="subCategoryTitle">
          Pick a topic to generate interview questions
        </h2>
        <div className="buttonContainer">
          <Link to={`/${category}/htmlCSS`}>
            <button className="subCategoryButton" type="submit">
              HTML/CSS
            </button>
          </Link>
          <Link to={`/${category}/computerScience`}>
            <button className="subCategoryButton" type="submit">
              Computer Science
            </button>
          </Link>
          <Link to={`/${category}/javascript`}>
            <button className="subCategoryButton" type="submit">
              JavaScript
            </button>
          </Link>
          <Link to={`/${category}/react`}>
            <button className="subCategoryButton" type="submit">
              React
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TechnicalLandingPage;

TechnicalLandingPage.propTypes = {
  category: PropTypes.string.isRequired,
};
