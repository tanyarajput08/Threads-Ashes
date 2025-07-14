import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    '/assets/wd/wd/x1.jpg',
    '/assets/wd/wd/x2.jpg',
    '/assets/wd/wd/x3.jpg',
    '/assets/wd/wd/x4.jpg',
    '/assets/wd/wd/x5.jpg'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === bannerImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? bannerImages.length - 1 : currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === bannerImages.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container">
          {/* Main Slider */}
          <div className="slider-wrapper">
            {bannerImages.map((image, index) => (
              <div 
                key={index}
                className={`slider-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={image} 
                  alt={`Banner ${index + 1}`} 
                  className="banner-img"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="slider-nav prev" onClick={goToPrevious}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button className="slider-nav next" onClick={goToNext}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>

          {/* Indicator Dots */}
          <div className="slider-indicators">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 