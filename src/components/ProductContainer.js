import React, { useState } from 'react';
import './ProductContainer.css';

const ProductContainer = () => {
  const [activeSidebarAccordion, setActiveSidebarAccordion] = useState(null);

  const handleSidebarAccordionClick = (index) => {
    setActiveSidebarAccordion(activeSidebarAccordion === index ? null : index);
  };

  const categoryData = [
    {
      name: 'Top Wear',
      icon: '/assets/images/icons/dress.svg',
      items: [
        'ji', 'j2', 'j3', 's1', 's2', 's3', 'sh1', 'sh2', 'sh3', 'tsh1', 'tsh2', 'tsh3',
      ],
    },
    {
      name: 'Bottom Wear',
      icon: '/assets/images/icons/shorts.svg',
      items: [
        'p_b1', 'p_b2', 'p_c1', 'p_c2', 'P_d1', 'p_d2', 'p_s3',
      ],
    },
    {
      name: 'Shoes',
      icon: '/assets/images/icons/shoes.svg',
      items: [
        'f_b1', 'f_c1', 'f_c2', 'f_c4', 'f_f2', 'f_f3',
      ],
    },
    {
      name: 'Belts',
      icon: '/assets/images/icons/belt.svg',
      items: [
        'beltL1', 'beltL2', 'beltL3', 'beltL4', 'beltLux1',
      ],
    },
  ];

  return (
    <div className="product-container">
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar has-scrollbar">
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>
              <button className="sidebar-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
            <ul className="sidebar-menu-category-list">
              {categoryData.map((cat, idx) => (
                <li className="sidebar-menu-category" key={cat.name}>
                  <button
                    className={`sidebar-accordion-menu ${activeSidebarAccordion === idx ? 'active' : ''}`}
                    onClick={() => handleSidebarAccordionClick(idx)}
                  >
                    <div className="menu-title-flex">
                      <img src={cat.icon} alt={cat.name} width="20" height="20" className="menu-title-img" />
                      <p className="menu-title">{cat.name}</p>
                    </div>
                    <div>
                      <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                  </button>
                  <ul className={`sidebar-submenu-category-list ${activeSidebarAccordion === idx ? 'active' : ''}`}>
                    <div className="category-items-grid">
                      {activeSidebarAccordion === idx && cat.items.map(item => (
                        <div className="category-item-card" key={item}>
                          <img
                            src={`/assets/images/wd/wd/${item}.jpg`}
                            alt={item}
                            className="category-item-img"
                          />
                          <div className="category-item-label">{item}</div>
                        </div>
                      ))}
                    </div>
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-showcase">
            <h3 className="showcase-heading">best sellers</h3>
            <div className="showcase-wrapper">
              <div className="showcase-container">
                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img src="/assets/images/products/1.jpg" alt="baby fabric shoes" width="75" height="75" className="showcase-img" />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">baby fabric shoes</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$4.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img src="/assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img" width="75" height="75" />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">men's hoodies t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                    <div className="price-box">
                      <del>$17.00</del>
                      <p className="price">$7.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img src="/assets/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width="75" height="75" />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">girls t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>
                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$3.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img src="/assets/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width="75" height="75" />
                  </a>
                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">woolen hat for men</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="price-box">
                      <del>$15.00</del>
                      <p className="price">$12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Product Box - About Us Section */}
        <div className="product-box">
          <div className="a">
            <div>
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore, nostrum cum, recusandae ipsa repellat dolore ea non sed aut perspiciatis consequuntur assumenda quia. Distinctio dolores unde commodi doloribus maxime?</p>
            </div>
            <div>
              <img src="/assets/wd/wd/a.jpg" alt="About Us" />
            </div>
          </div>
          
          <div className="a">
            <div>
              <img src="/assets/wd/wd/b.jpg" alt="Our Mission" />
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dignissimos aut amet consequatur cumque quidem expedita, magni officiis numquam nam placeat quam ducimus eligendi autem architecto mollitia laudantium alias adipisci.</p>
            </div>
          </div>
          
          <div className="a">
            <div>
              <h2>Our Vision</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dignissimos aut amet consequatur cumque quidem expedita, magni officiis numquam nam placeat quam ducimus eligendi autem architecto mollitia laudantium alias adipisci.</p>
            </div>
            <div>
              <img src="/assets/wd/wd/c.jpg" alt="Our Vision" />
            </div>
          </div>
          
          <div>
            <h1>By Numbers</h1>
            <div>
              <div>
                <img src="" alt="" />
                <h2></h2>
                <a href=""></a>
              </div>
              <div>
                <img src="" alt="" />
                <h2></h2>
                <a href=""></a>
              </div>
              <div>
                <img src="" alt="" />
                <h2></h2>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer; 