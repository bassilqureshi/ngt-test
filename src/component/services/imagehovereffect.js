import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ImageHoverEffect = ({ src, hoverSrc, text,route }) => {
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        imageRef.current.style.transformOrigin = `${x}px ${y}px`;
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        imageRef.current.style.transformOrigin = 'center center';
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
   

    return (
        <Link  to={route} className="image-link"  onClick={() => window.scrollTo(0, 0)}>
            <div
                className="navbar-services-image-container "
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
            >
                <img
                    src={isHovered ? hoverSrc : src}
                    alt="Hover Effect"
                    className="navbar-services-hover-image  lg:h-[95px] lg:w-[105px] 2xl:h-[161px] 2xl:w-[175px]"
                    ref={imageRef}
                />
                <div className="image-text text-center lg:text-[18px] 2xl:text-[22px] leading-[33px] pt-6 w-[97%] ">{text}</div>
                {/* <div className="services-image-text text-center lg:text-[14px] 2xl:text-[16px] mt-3 leading-[20px] text-[#333333]  w-[80%]  ">{desc}</div> */}
            </div>
        </Link >
    );
};

export default ImageHoverEffect;
