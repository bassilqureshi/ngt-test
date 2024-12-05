import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import contactUsNow from "../../contactUsNow.json";
import eBrochure from "../../eBrochure.json";
import { NavLink, useLocation } from "react-router-dom";

const KnowMore = () => {
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section className="know-more-section">
        <div className="row expanded align-center">
          <div className="xxlarge-10 medium-12 small-14 xsmall-14 columns">
            <h2>Do you want to know more?</h2>
            <div className="row expanded xxlarge-up-2 xsmall-up-1">
              <div className="columns">
                <div>
                  <a href="mailto:hr@ngtsol.com?subject=I want to know more about the NGTSOL Offer!"
                    target="_blank" rel="noreferrer">
                    <Lottie animationData={contactUsNow} loop={true} />
                  </a>
                </div>
              </div>
              <div className="columns">
                <div>
                  <NavLink
                    to="javascript:void(0);"
                    onClick={() => handleDownload('/Career/ngt-brochure.pdf')}
                    style={{ textDecoration: 'none' }}
                  >
                    <Lottie animationData={eBrochure} loop={true} />
                  </NavLink>
                  {/* <a href="/Career/ngt-brochure.pdf" target="_blank" rel="noreferrer"
                    download>
                    
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* know-more-section */}
    </>
  );
};

export default KnowMore;
