import React, { useState, useEffect } from 'react';

export default function Reviews({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate to the next review every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);
    
    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, [reviews.length]);

  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="section-block">
      <h3>Student Reviews</h3>
      <div className="card review-card">
        <p className="review-text">"{reviews[currentIndex]}"</p>
        <div className="review-indicators">
          {reviews.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}