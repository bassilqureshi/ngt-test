import React from 'react';
import ImageHoverEffect from './imagehovereffect';


const ImageGrid = ({ images }) => {
    return (
        <div className="navbar-image-grid">
            {images.map((item, index) => (
                <ImageHoverEffect key={index} src={item.src} hoverSrc={item.hoverSrc} text={item.text}  route={item.url} />
            ))}
        </div>
    );
};

export default ImageGrid;