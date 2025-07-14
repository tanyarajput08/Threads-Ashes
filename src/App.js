import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import TrendingCarousel from './components/TrendingCarousel';
import CategoriesSection from './components/CategoriesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import NotificationToast from './components/NotificationToast';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import CategoryPage from './components/CategoryPage';
import TestimonialsSection from './components/TestimonialsSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOverlayActive(!isOverlayActive);
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
    setIsOverlayActive(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={handleOverlayClick}></div>
          
          <NotificationToast />
          
          <Header 
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuToggle={handleMobileMenuToggle}
            onOverlayClick={handleOverlayClick}
          />
          
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Banner />
                  <CategoriesSection />
                  <TrendingCarousel />
                  <TestimonialsSection />
                  <BlogSection />
                </>
              } />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
