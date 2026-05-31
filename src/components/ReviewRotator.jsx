import { useState, useEffect, useCallback } from 'react';
import { reviews } from '../data/reviews';

export default function ReviewRotator() {
  const [index, setIndex] = useState(() => {
    return reviews.length > 0 ? Math.floor(Math.random() * reviews.length) : 0;
  });
  const [visible, setVisible] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getRandomIndex = (currentIndex) => {
    if (reviews.length <= 1) return currentIndex;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === currentIndex);
    return newIndex;
  };

  const advanceRandomly = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prev) => getRandomIndex(prev));
      setVisible(true);
    }, 600);
  }, []);

  useEffect(() => {
    if (reviews.length <= 1 || !isAutoPlaying) return;
    const timer = setInterval(advanceRandomly, 6000);
    return () => clearInterval(timer);
  }, [advanceRandomly, isAutoPlaying]);

  const handleManualNavigation = (newIndex) => {
    setIsAutoPlaying(false);
    if (newIndex === index) return;
    setVisible(false);
    setTimeout(() => {
      setIndex(newIndex);
      setVisible(true);
    }, 300);
  };

  const goNext = () => handleManualNavigation((index + 1) % reviews.length);
  const goPrev = () => handleManualNavigation((index - 1 + reviews.length) % reviews.length);

  if (!reviews.length) return null;

  const review = reviews[index];

  // The width of each individual dot slot in pixels (matches CSS)
  const DOT_SLOT_WIDTH = 16; 

  return (
    <div className="review-rotator">
      <div className={`review-bubble${visible ? '' : ' fading'}`}>
        <p className="review-text">"{review.text}"</p>
        <p className="review-source">- {review.source}</p>
      </div>

      {reviews.length > 1 && (
        <div className="review-controls">
          <button className="nav-arrow" onClick={goPrev}>
            &#8592;
          </button>
          
          {/* The visible viewport window */}
          <div className="wheel-window">
            {/* The moving track containing all dots */}
            <div 
              className="wheel-track"
              style={{
                transform: `translateX(${(2 - index) * DOT_SLOT_WIDTH}px)`
              }}
            >
              {reviews.map((_, i) => {
                // Calculate how far this dot is from the active center index
                const distance = Math.abs(i - index);
                
                let sizeClass = "dot-invisible";
                if (distance === 0) sizeClass = "dot-large active";
                else if (distance === 1) sizeClass = "dot-medium";
                else if (distance === 2) sizeClass = "dot-small";

                return (
                  <div key={i} className="dot-wrapper">
                    <span
                      className={`wheel-dot ${sizeClass}`}
                      onClick={() => handleManualNavigation(i)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="nav-arrow" onClick={goNext}>
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}