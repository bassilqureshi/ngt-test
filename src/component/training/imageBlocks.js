import React, { useEffect, useState } from 'react';

const ImageBlocks = () => {

  return (
    <>
      <section className="about image-blocks">
        <div className="row expanded question-row">
          <div
            className="question-wrapper lg:text-[] xxlarge-5 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
            <h3 className='lg:text-[45px]'>As technology rapidly evolves, so do our training programs.</h3>
            <h2 className="blief_txt" style={{'margin':0}}></h2>
          </div>
        </div>
        <div className="row expanded image-wrapper">
          <div className="xxlarge-13 small-16 small-offset-0">
            <picture>
              <img src="/Training/training-bg.png" alt="" />
            </picture>
            <div className="row expanded answer-wrapper">
              <div
                className="xxlarge-4 xxlarge-offset-10 medium-7 medium-offset-8 small-10 small-offset-5 xsmall-14 xsmall-offset-1 answer-wrapper-text">
                <h3 className='text-[45px]'>Join us in building a future-ready workforce, equipped to turn today’s challenges into tomorrow’s achievements.</h3>
                <h4 className='text-[45px]'></h4>
              </div>
            </div>
          </div>

        </div>

      </section>
      {/* about */}
    </>
  );
};

export default ImageBlocks;