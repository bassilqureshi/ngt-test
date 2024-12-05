import React, { useEffect, useRef } from "react";

const ImageBlockOne = () => {
    return (
        <div className="ngt_container_new img_block_one">
            <div className="ngt_image-wrapper">
                <img src="/EnterprisePlanning/img-block.png" className="ngt_image" />
                <div className="ngt_text-container">
                    <div className="ngt_text-box">
                        <h3>ERP</h3>
                        <p className="ngt_text">
                        Unlock the full potential of your business with ERP solutions that streamline operations and drive growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageBlockOne;
