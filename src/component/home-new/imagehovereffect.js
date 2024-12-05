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
                className="services-image-container "
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
            >
                <img
                    src={isHovered ? hoverSrc : src}
                    alt="Hover Effect"
                    className="services-hover-image "
                    ref={imageRef}
                />
                <div className="image-text text-center text-[22px] leading-[33px] pt-6 w-[97%] ">{text}</div>
            </div>
        </Link >
    );
};

export default ImageHoverEffect;
