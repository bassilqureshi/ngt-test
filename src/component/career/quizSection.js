import React, { useEffect, useState } from 'react';

const QuizSection = () => {

  return (
    <>
      <section className="quiz-section">
        <a href="#" role="link" target="_blank" rel="noreferrer" aria-label="Answer the Quiz in around 2 minutes" className="elastic-btn">
          Answer the Quiz
          <svg viewBox="0 0 392 122">
            <path className="morph-bg" d="M331,122H61A61,61,0,0,1,0,61H0A61,61,0,0,1,61,0H331a61,61,0,0,1,61,61h0A61,61,0,0,1,331,122Z" data-hover="M324,118.82H68A57.82,57.82,0,0,1,10.2,61h0A57.82,57.82,0,0,1,68,3.18H324A57.82,57.82,0,0,1,381.8,61h0A57.82,57.82,0,0,1,324,118.82Z"></path>
          </svg>
        </a>
        <div className="row expanded align-center">
          <div className="xxlarge-8 medium-13 small-14 xsmall-14 columns">
            <h2>What sort of challenge could inspire you to join our team?</h2>
            <ul role="list">
              <li>International Opportunities</li>
              <li>Career Development</li>
              <li>Income</li>
              <li>Perks &amp; Benefits</li>
              <li>Field of my Dreams</li>
              <li>Geography of Preference</li>
              <li>Interesting Projects</li>
              <li>Great Work Environment</li>
              <li>Skills Development</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizSection;
