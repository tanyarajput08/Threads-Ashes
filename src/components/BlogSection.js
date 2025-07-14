import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          <div className="blog-card">
            <a href="#">
              <img src="/assets/images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" className="blog-banner" />
            </a>
            <div className="blog-content">
              <a href="#" className="blog-category">Fashion</a>
              <a href="#">
                <h3 className="blog-title">Retail Reinvented: 2025 Fashion KPIs Every Trendsetter Should Know</h3>
              </a>

            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img src="/assets/images/blog-2.jpg" alt="Style at Your Doorstep: Mastering the Art of Curbside Fashion" className="blog-banner" width="300" />
            </a>
            <div className="blog-content">
              <a href="#" className="blog-category">Clothes</a>
              <h3>
                <a href="#" className="blog-title">Style at Your Doorstep: Mastering the Art of Curbside Fashion</a>
              </h3>

            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img src="/assets/images/blog-3.jpg" alt="Boost Sales: Unlock the Power of Online SNAP & EBT Shopping" className="blog-banner" width="300" />
            </a>
            <div className="blog-content">
              <a href="#" className="blog-category">Shoes</a>
              <h3>
                <a href="#" className="blog-title">Boost Sales: Unlock the Power of Online SNAP & EBT Shopping</a>
              </h3>

            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img src="/assets/images/blog-4.jpg" alt="Tech Meets Trends: Elevate Your Electronics Game with Smart Pickup" className="blog-banner" width="300" />
            </a>
            <div className="blog-content">
              <a href="#" className="blog-category">Electronics</a>
              <h3>
                <a href="#" className="blog-title">Tech Meets Trends: Elevate Your Electronics Game with Smart Pickup</a>
              </h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 