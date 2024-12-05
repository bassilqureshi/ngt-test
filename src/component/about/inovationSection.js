import React from 'react';

const InovationSection = () => {
  return (
    <div className="inovation_container">
      <div className="hex-background" style={{ backgroundImage: "url('/About/hexagon-pattern.png')" }}>
        <div className="grid">
          {/* 1st Item with fade-up */}
          <div className="item first_item item-below fade-up">
            <span className="number">1</span>
            <div className="content-below">
              <h2>Integrity</h2>
              <p>We stand for <span className="highlight">reliability, honesty, and transparency</span> in everything we do.</p>
            </div>
            <span className="dot"></span>
          </div>

          {/* 2nd Item with fade-down */}
          <div className="item item-above fade-down">
            <span className="number number-middle even_above">2</span>
            <div className="content-above">
              <h2>Innovation</h2>
              <p>We drive progress through <span className="highlight">strategic thinking, experimentation, and fearless decision-making.</span></p>
            </div>
            <span className="number number-middle even_below">2</span>
            <span className="dot"></span>
          </div>

          {/* 3rd Item with fade-up */}
          <div className="item item-below fade-up">
            <span className="number">3</span>
            <div className="content-below">
              <h2>Dedication</h2>
              <p>We are committed to <span className="highlight">achieving excellence with unwavering focus</span> and precision.</p>
            </div>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InovationSection;
