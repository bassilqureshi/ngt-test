import React, { useEffect, useState } from 'react';

const ImageBlocks = () => {

  return (
    <>
      <section className="about image-blocks">
        <div className="row expanded question-row">
          <div
            className="question-wrapper lg:text-[] xxlarge-5 xxlarge-offset-2 medium-6 medium-offset-1 small-8 xsmall-14 background-lightGray">
            <h3 className='lg:text-[45px]'>Company’s accomplishment stems from its happy workforce.</h3>
            <h2 className="blief_txt">That's our belief.</h2>
          </div>
        </div>
        <div className="row expanded image-wrapper">
          <div className="xxlarge-13 xxlarge-offset-3 small-16 small-offset-0">
            <picture>
              <img src="/Career/career1.png" alt="" />
            </picture>
            <div className="offset-text row">
              <div className="xxlarge-8 xxlarge-offset-6 medium-10 xsmall-14 xsmall-offset-0 columns">
                <p className="js-text-element">As our company continues to expand, so does your
                  potential. That's why we're committed to developing your tailored career
                  path and providing numerous professional and personal advantages.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row expanded answer-wrapper">
          <div
            className="xxlarge-4 xxlarge-offset-10 medium-7 medium-offset-8 small-10 small-offset-5 xsmall-14 xsmall-offset-1 answer-wrapper-text">
            <h3 className='text-[45px]'>Ready?</h3>
            <h4 className='text-[45px]'>Join the Experience!</h4>
          </div>
        </div>
      </section>
      {/* about */}
    </>
  );
};

export default ImageBlocks;
