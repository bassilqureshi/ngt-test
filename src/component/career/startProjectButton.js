import React, { useEffect, useState } from 'react';
import { useCustomAnimation } from "../../hooks/useCustomAnimation";

const StartProjectButton = () => {
  useCustomAnimation();

  return (
    <>
      <div className="start-project-container">
        <div className="cta-start-project">
          <h3>Become<br />a Player!</h3>
          <svg viewBox="0 0 768 496" className="cta-bg">
            <path d="M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7
    C519.2,399.7,462.9,282.2,384.7,365.3z" data-init="M384.7,365.3C289.8,466.1,77.4,279,259.1,135.5C374,44.8,623.8,155.2,573.5,272.7
    C519.2,399.7,462.9,282.2,384.7,365.3z"
              data-close="M384.51,338.05C316,388,178,249,288.09,161.65c88.05-69.87,280,15.09,241.39,105.29C487.79,364.43,455.33,286.42,384.51,338.05Z"
              data-morphPath="M384.7,365.3C276.2,451.3,63.3,270.5,245,127c114.9-90.8,392,14,328.5,145.7C513.5,397.1,472,296,384.7,365.3z" />
          </svg>
          <button className="elastic-btn">
            <svg viewBox="0 0 164 69">
              <path className="morph-bg" d="M23 0h112a23 23 0 1 1 0 46H23a23 23 0 1 1 0-46z"
                data-hover="M27,1.63H131a21.37,21.37,0,1,1,0,42.74H27A21.37,21.37,0,1,1,27,1.63Z" />
            </svg>
            <span className="text">Open opportunities</span>
          </button>
        </div>
      </div>

    </>
  );
};

export default StartProjectButton;
