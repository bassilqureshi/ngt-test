import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const QuizSection = () => {

  return (
    <>
      <div className='page-content'>
        <section className="quiz-section">

          <div className="row expanded align-center">
            <div className="xxlarge-8 medium-13 small-14 xsmall-14 columns">
              <h2>What type of offer excites you to join our team?</h2>
            </div>
            <div className='bullets_sec'>
              <ul role="list">
                <li>IT Support Specialist</li>
                <li>Help Desk Technician</li>
                <li>Network Administrator</li>
                <li>Systems Administrator</li>
                <li>Security Engineer</li>
                <li>Security Analyst</li>
                <li>IT Project Manager</li>
                <li>Cloud Engineer</li>
                <li>DevOps Engineer</li>
              </ul>
              <NavLink
                to="/jobs"
                className='elastic-btn'
              >
                See Job Ofers
                <svg viewBox="0 0 392 122">
                  <path className="morph-bg" d="M331,122H61A61,61,0,0,1,0,61H0A61,61,0,0,1,61,0H331a61,61,0,0,1,61,61h0A61,61,0,0,1,331,122Z" data-hover="M324,118.82H68A57.82,57.82,0,0,1,10.2,61h0A57.82,57.82,0,0,1,68,3.18H324A57.82,57.82,0,0,1,381.8,61h0A57.82,57.82,0,0,1,324,118.82Z"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuizSection;
