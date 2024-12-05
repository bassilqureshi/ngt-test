import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const HoverButton = ({ image, text }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const calculatePosition = () => {
      gsap.set(button, { x: 0, y: 0, scale: 1 });
      const box = button.getBoundingClientRect();
      button.x = box.left + box.width / 2;
      button.y = box.top + box.height / 2;
      button.width = box.width;
      button.height = box.height;
    };

    const onMouseMove = (e) => {
      let hover = false;
      const hoverArea = button.hover ? 0.7 : 0.5;
      const x = e.clientX - button.x;
      const y = e.clientY - button.y;
      const distance = Math.sqrt(x * x + y * y);
      if (distance < button.width * hoverArea) {
        hover = true;
        if (!button.hover) {
          button.hover = true;
        }
        onHover(e.clientX, e.clientY);
      }

      if (!hover && button.hover) {
        onLeave();
        button.hover = false;
      }
    };

    const onHover = (x, y) => {
      gsap.to(button, {
        x: (x - button.x) * 0.4,
        y: (y - button.y) * 0.4,
        scale: 1.15,
        ease: 'power2.out',
        duration: 0.4,
      });
      button.style.zIndex = 10;
    };

    const onLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.7,
      });
      button.style.zIndex = 1;
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            calculatePosition();
            observer.disconnect(); // Disconnect observer after calculating position
          }
        });
      });
  
      observer.observe(button);

    calculatePosition();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', calculatePosition);
    };
  }, []);

  return (
    <div className="text-center mt-20">
      <button ref={buttonRef} className="relative w-64  h-56 cursor-pointer p-0 ">
        <img src={image} alt="Button" className="w-full h-full object-fill" />
      </button>
      <div className="text-center font-[700] text-[28px] leading-[38px] pt-4 bg-slate-700">{text}</div>
    </div>
  );
};

export default HoverButton;
