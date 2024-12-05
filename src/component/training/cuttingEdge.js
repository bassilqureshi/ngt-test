import React, { useEffect, useRef } from "react";

const CuttingEdge = () => {
  return (
    <section class="ngt_cutting_edge_sec">
      <div class="ngt_container">
        <div class="ngt_row">
          <div class="ngt_col-lg-4 img_col_edge">
            <div class="ngt_row">
              <div class="ngt_col-lg-12">
                <img src="/Training/img-1.png" />
              </div>
              <div class="ngt_col-lg-12">
                <img src="/Training/img-2.png" />
              </div>
            </div>
          </div>
          <div class="ngt_col-lg-4 heading_sec_prof">
            <div className="heading_content_edge">
              <img src="/Training/cutting_edge.svg" />
              <p>Stay on the Cutting Edge of Technology Our training programs are made to equip you with the skills necessary to navigate and thrive in this rapidly evolving landscape, ensuring you remain competitive and future-ready.</p>
            </div>
          </div>
          <div class="ngt_col-lg-4 img_col_edge">
            <div class="ngt_row">
              <div class="ngt_col-lg-12">
                <img src="/Training/img-3.png" />
              </div>
              <div class="ngt_col-lg-12">
                <img src="/Training/img-4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuttingEdge;
