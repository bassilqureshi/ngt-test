import { useEffect } from 'react';
import { gsap } from 'gsap';
import { interpolate } from 'flubber';

const useMorphLetters = () => {
  useEffect(() => {
    const morphingLetters = document.querySelectorAll('.morphing-letter');

    morphingLetters.forEach((element) => {
      const normalPath = element.querySelector('svg .main-letter').getAttribute('d');
      const activePath = element.getAttribute('data-morphPath');

      const interpolator = interpolate(normalPath, activePath, { maxSegmentLength: 0.5 });

      const timeline = gsap.timeline({ repeat: -1, yoyo: true });

      timeline.to(
        element.querySelector('.letter'),
        {
          duration: 2,
          ease: 'sine.out',
          onUpdate: function () {
            const interpolatedPath = interpolator(this.progress());
            element.querySelector('.letter').setAttribute('d', interpolatedPath);
          }
        }
      );

      element.dataset.normal = normalPath;
      element.dataset.active = activePath;
    });
  }, []);
};

export default useMorphLetters;
