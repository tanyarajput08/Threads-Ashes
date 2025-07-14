import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductContainer.css';

const categoryImages = {
  topwear: ['j1', 'j2', 'j3', 's1', 's2', 's3', 'sh1', 'sh2', 'sh3', 'tsh1', 'tsh2', 'tsh3'],
  bottomwear: ['p_b1', 'p_b2', 'p_c1', 'P_d1', 'p_d2', 'p_d3'],
  shoes: ['f_b1', 'f_c1', 'f_c2', 'f_c4', 'f_f2', 'f_f3'],
  belts: ['beltL1', 'beltL2', 'beltL3', 'beltL4', 'beltLux1'],
};

const displayNames = {
  topwear: 'Shirt',
  bottomwear: 'Pant',
  shoes: 'Shoe',
  belts: 'Belt',
};

const displayTitles = {
  topwear: 'Top Wear',
  bottomwear: 'Bottom Wear',
  shoes: 'Shoes',
  belts: 'Belts',
};

const randomDescriptions = [
  'Premium quality and comfort.',
  'Trendy and stylish for every occasion.',
  'Best seller in its category.',
  'Limited stock available!',
  'Perfect fit and durable material.',
  'Customer favorite – highly rated.',
  'Now with improved design.',
  'Exclusive online offer.',
  'Easy returns and fast delivery.',
  'A must-have for your wardrobe.',
];

function getRandomPrice() {
  // Generate a random price between 299 and 1499
  return Math.floor(Math.random() * (1499 - 299 + 1)) + 299;
}

function getRandomDescription() {
  return randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)];
}

const CategoryPage = () => {
  const { categoryName } = useParams();
  const images = categoryImages[categoryName] || [];
  const typeLabel = displayNames[categoryName] || 'Product';
  const title = displayTitles[categoryName] || 'Category';

  return (
    <div className="product-container">
      <h2 style={{textAlign: 'center', margin: '32px 0 24px 0', fontSize: '2rem'}}>{title}</h2>
      <div className="category-items-grid">
        {images.map((img) => (
          <div className="category-item-card" key={img}>
            <img
              src={`/assets/wd/wd/${img}.jpg`}
              alt={img}
              className="category-item-img"
            />
            <div className="category-item-label">{typeLabel}</div>
            <div className="category-item-price">₹{getRandomPrice()}</div>
            <div className="category-item-desc">{getRandomDescription()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage; 