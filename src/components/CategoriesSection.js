import React, { useRef, useEffect } from 'react';
import './CategoriesSection.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Topwear', img: '/assets/images/products/jacket-1.jpg' },
  { name: 'Bottomwear', img: '/assets/images/products/shorts-2.jpg' },
  { name: 'Shoes', img: '/assets/images/products/shoe-2.jpg' },
  { name: 'Belts', img: '/assets/images/products/belt.jpg' },
];

const CategoriesSection = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const dist = Math.abs(cardCenter - viewportCenter);
        // Scale and shadow: closer to center = bigger and more shadow
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

  return (
    <section className="categories-section">
      <h2 className="categories-heading">Categories</h2>
      <div className="categories-row">
        {categories.map((cat, idx) => (
          <div
            className="category-card pop-float-card"
            key={cat.name}
            ref={el => cardRefs.current[idx] = el}
            onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
          >
            <img src={cat.img} alt={cat.name} className="category-icon" style={{width: '64px', height: '64px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px'}} />
            <div className="category-label">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection; 