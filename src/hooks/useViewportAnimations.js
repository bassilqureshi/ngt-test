import { useEffect, useRef } from 'react';
import { TweenMax, Power4, Elastic, Expo } from 'gsap';

const useViewportAnimations = () => {
  const observer = useRef(null);

  const initViewportAnimations = () => {
    // Intersection Observer options
    const options = { rootMargin: '0px', threshold: [0, 0.75] };

    // Callback function to handle intersection changes
    const observerCallback = (entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          observerInstance.unobserve(entry.target);
          const target = entry.target;

          // Apply animations based on the element type
          switch (target.dataset.type) {
            case 'titleElement':
              TweenMax.to(target, 1, { y: '0px', ease: Power4.easeOut });
              break;
            case 'textElement':
              TweenMax.to(target, 1, { x: '0px', opacity: 1, ease: Power4.easeOut });
              break;
            case 'bigTextElement':
              TweenMax.to(target, 1, { y: '0px', opacity: 1, ease: Power4.easeOut });
              break;
            case 'imageBlocksQuestionElement':
              TweenMax.staggerTo(
                [target.querySelector('h2'), target.querySelector('h3')],
                0.5,
                { y: '0px', opacity: 1, delay: 0.8 },
                0.2
              );
              TweenMax.staggerTo(target, 1, { scaleX: 1, ease: Power4.easeOut });
              const imageWrapper = target.closest('.question-row')?.querySelector('.image-wrapper');
              if (imageWrapper) {
                TweenMax.to(imageWrapper, 2, {
                  opacity: 1,
                  scale: 1,
                  delay: 2,
                  ease: Elastic.easeOut.config(1, 0.8),
                });
              }
              break;
            case 'imageBlocksAnswerElement':
              TweenMax.to(target.querySelector('h3'), 0.5, { y: '0px', opacity: 1, delay: 0.8 });
              TweenMax.to(target.querySelector('h4'), 0.5, { y: '0px', opacity: 0.6, delay: 1.5 });
              TweenMax.staggerTo(target, 1, { scaleX: 1, ease: Expo.easeOut });
              break;
            case 'writeTextElement':
              TweenMax.staggerTo(target.querySelectorAll('.char'), 0, { opacity: 1, delay: 0.5 }, 0.05);
              break;
            default:
              break;
          }
        }
      });
    };

    // Create the intersection observer with the callback and options
    observer.current = new IntersectionObserver(observerCallback, options);

    const elements = document.querySelectorAll('.js-title-element, .js-bigText-element, .js-text-element, .js-write-text, .image-blocks .question-wrapper, .recruitment .question-wrapper, .image-blocks .answer-wrapper-text, .recruitment .answer-wrapper-text');

    elements.forEach(element => {
      const type = element.classList.contains('js-title-element')
        ? 'titleElement'
        : element.classList.contains('js-text-element')
        ? 'textElement'
        : element.classList.contains('js-bigText-element')
        ? 'bigTextElement'
        : element.classList.contains('question-wrapper')
        ? 'imageBlocksQuestionElement'
        : element.classList.contains('answer-wrapper-text')
        ? 'imageBlocksAnswerElement'
        : element.classList.contains('js-write-text')
        ? 'writeTextElement'
        : '';

      element.dataset.type = type;

      switch (type) {
        case 'titleElement':
          element.style.transform = `translateY(${element.clientHeight}px)`;
          observer.current.observe(element);
          break;
        case 'textElement':
          element.style.transform = 'translateX(-40px)';
          element.style.opacity = 0;
          observer.current.observe(element);
          break;
        case 'bigTextElement':
          element.style.transform = 'translateY(100px)';
          element.style.opacity = 0;
          observer.current.observe(element);
          break;
        case 'imageBlocksQuestionElement':
          const headers = element.querySelectorAll('h2, h3');
          headers.forEach(header => {
            header.style.transform = 'translateY(40px)';
            header.style.opacity = 0;
          });
          element.style.transform = 'scaleX(0.01)';
          observer.current.observe(element);
          break;
        case 'imageBlocksAnswerElement':
          const h3 = element.querySelector('h3');
          const h4 = element.querySelector('h4');
          h3.style.transform = 'translateY(40px)';
          h3.style.opacity = 0;
          h4.style.transform = 'translateY(40px)';
          h4.style.opacity = 0;
          element.style.transform = 'scaleX(0.01)';
          observer.current.observe(element);
          break;
        case 'writeTextElement':
          const chars = element.querySelectorAll('.char');
          chars.forEach(char => (char.style.opacity = 0));
          observer.current.observe(element);
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    initViewportAnimations();

    return () => {
      observer.current && observer.current.disconnect();
    };
  }, []);
};

export default useViewportAnimations;
