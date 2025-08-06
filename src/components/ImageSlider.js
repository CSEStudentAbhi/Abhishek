import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  const getSlideStyle = (offset) => {
    const isCurrent = offset === 0;
    const isAdjacent = Math.abs(offset) === 1;
    const isFar = Math.abs(offset) === 2;

    if (isCurrent) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 10,
        filter: 'blur(0px)',
        opacity: 1,
      };
    } else if (isAdjacent) {
      const direction = offset > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 60}%) scale(0.8) rotateY(${direction * 15}deg)`,
        zIndex: 5,
        filter: 'blur(2px)',
        opacity: 0.7,
      };
    } else if (isFar) {
      const direction = offset > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 120}%) scale(0.6) rotateY(${direction * 30}deg)`,
        zIndex: 1,
        filter: 'blur(4px)',
        opacity: 0.4,
      };
    } else {
      return {
        transform: 'translateX(200%) scale(0.4) rotateY(45deg)',
        zIndex: 0,
        filter: 'blur(6px)',
        opacity: 0.2,
      };
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      margin: '20px 0'
    }}>
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 20,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>

      <button
        onClick={goToNext}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 20,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>

      {/* Slides Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Render slides with different positions */}
        {[-2, -1, 0, 1, 2].map((offset) => {
          const slideIndex = getSlideIndex(offset);
          const slideStyle = getSlideStyle(offset);
          
          return (
            <div
              key={`${currentIndex}-${offset}`}
              style={{
                position: 'absolute',
                width: '280px',
                height: '320px',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                ...slideStyle
              }}
              onClick={() => goToSlide(slideIndex)}
            >
              <div style={{
                width: '100%',
                height: '100%',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}>
                <div style={{
                  flex: 1,
                  background: `url(${images[slideIndex]}) center/cover`,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    color: 'white',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                      Slide {slideIndex + 1}
                    </h3>
                    <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
                      Abhishek Ambi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 20
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex) {
                e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex) {
                e.target.style.background = 'rgba(255, 255, 255, 0.5)';
              }
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
        overflow: 'hidden',
        zIndex: 20
      }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'white',
            borderRadius: '2px',
            animation: 'progress 3s linear infinite'
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
