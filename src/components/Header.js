import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Header = ({ isMobileMenuOpen, onMobileMenuToggle, onOverlayClick }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <header>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>

            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img src="/assets/wd/wd/logo.jpg" alt="Threads & Ashes's logo" width="100" height="100" />
          </a>

          <div className="header-search-container">
            <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>
            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>
            <Link to="/cart" className="action-btn" aria-label="Cart">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Tops</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sweater</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Shirt</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">T-Shirt</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jackets</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Bottoms</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Denim</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bell Bottom</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formals</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cargo</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Belt</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Luxury</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Leather</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Handmade</a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Shoes</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formals</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casuals</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Boots</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Tops</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">T-Shirts</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Sweaters</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Jackets</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Bottoms</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Denim</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Bell Bottom</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Formal</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Cargo</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Belts</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Leather</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Handmade</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Luxury</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Perfume</a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Blog</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={onMobileMenuToggle}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>
          <span className="count">0</span>
        </button>

        <button className="action-btn" onClick={onMobileMenuToggle}>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-navigation-menu has-scrollbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={onMobileMenuToggle}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">Home</a>
          </li>

          <li className="menu-category">
            <button 
              className={`accordion-menu ${activeAccordion === 0 ? 'active' : ''}`}
              onClick={() => handleAccordionClick(0)}
            >
              <p className="menu-title">Men's</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>
            <ul className={`submenu-category-list ${activeAccordion === 0 ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Shirt</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Shorts & Jeans</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Safety Shoes</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Wallet</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button 
              className={`accordion-menu ${activeAccordion === 1 ? 'active' : ''}`}
              onClick={() => handleAccordionClick(1)}
            >
              <p className="menu-title">Women's</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>
            <ul className={`submenu-category-list ${activeAccordion === 1 ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Dress & Frock</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Earrings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Makeup Kit</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button 
              className={`accordion-menu ${activeAccordion === 2 ? 'active' : ''}`}
              onClick={() => handleAccordionClick(2)}
            >
              <p className="menu-title">Jewelry</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>
            <ul className={`submenu-category-list ${activeAccordion === 2 ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Earrings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Couple Rings</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Bracelets</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button 
              className={`accordion-menu ${activeAccordion === 3 ? 'active' : ''}`}
              onClick={() => handleAccordionClick(3)}
            >
              <p className="menu-title">Perfume</p>
              <div>
                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
              </div>
            </button>
            <ul className={`submenu-category-list ${activeAccordion === 3 ? 'active' : ''}`}>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Clothes Perfume</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Deodorant</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Flower Fragrance</a>
              </li>
              <li className="submenu-category">
                <a href="#" className="submenu-title">Air Freshener</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">Blog</a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">Hot Offers</a>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 4 ? 'active' : ''}`}
                onClick={() => handleAccordionClick(4)}
              >
                <p className="menu-title">Language</p>
                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 4 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">English</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Español</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">Français</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button 
                className={`accordion-menu ${activeAccordion === 5 ? 'active' : ''}`}
                onClick={() => handleAccordionClick(5)}
              >
                <p className="menu-title">Currency</p>
                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
              </button>
              <ul className={`submenu-category-list ${activeAccordion === 5 ? 'active' : ''}`}>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">USD $</a>
                </li>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">EUR €</a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 