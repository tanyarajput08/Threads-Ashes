import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrendingCarousel.css';

const images = [
  'f_c6.jpg', 'f_c4.jpg', 'j3.jpg', 'j6.jpg', 'p_c1.jpg', 'p_sf1.jpg', 's4.jpg', 'sh4.jpg', 'sh2.jpg'
];

const TrendingCarousel = () => {
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        const scale = Math.max(1, 1.18 - dist / 700);
        const shadowStrength = Math.max(0.12, 0.32 - dist / 2000);
        ref.style.transform = `scale(${scale})`;
        ref.style.boxShadow = `0 8px 32px rgba(233,69,96,${shadowStrength})`;
        ref.style.zIndex = scale > 1.05 ? 2 : 1;
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];
  return (
    <section className="trending-section">
      <h2 className="trending-heading">Top Fashion</h2>
      <div className="trending-carousel-wrapper">
        <div className="trending-carousel-track">
          {allImages.map((img, idx) => {
            const imgId = img.replace('.jpg', '');
            return (
              <div
                className="trending-card pop-float-card"
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/product/${imgId}`)}
              >
                <img
                  src={`/assets/wd/wd/${img}`}
                  alt={imgId}
                  className="trending-card-img"
                  draggable="false"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel; 