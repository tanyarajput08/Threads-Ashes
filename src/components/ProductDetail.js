import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { useCart } from '../CartContext';

const productNames = [
  'Urban Explorer Jacket',
  'Classic Denim Shorts',
  'Street Style Sneakers',
  'Elegant Party Dress',
  'Comfy Cotton Tee',
  'Premium Leather Belt',
  'Sporty Track Pants',
  'Chic Summer Sandals',
  'Winter Warm Hoodie',
];
const productDescs = [
  'A must-have for every wardrobe. Crafted with premium materials for all-day comfort.',
  'Perfect for any occasion, this piece combines style and durability.',
  'Loved by our customers for its fit and finish. Limited stock available!',
  'Designed for those who value both fashion and function.',
  'Easy to style and easy to love. Grab yours now!',
];
const sizes = ['S', 'M', 'L', 'XL'];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomPrice() {
  return Math.floor(Math.random() * (1499 - 399 + 1)) + 399;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);

  const productName = getRandom(productNames);
  const productDesc = getRandom(productDescs);
  const price = getRandomPrice();
  const imageUrl = `/assets/wd/wd/${id}.jpg`;

  const handleAddToCart = () => {
    addToCart({
      id,
      name: productName,
      image: imageUrl,
      size,
      qty,
      price,
    });
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-image-box">
        <img src={imageUrl} alt={productName} className="product-detail-image" />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-title">{productName}</h1>
        <div className="product-detail-price">₹{price}</div>
        <p className="product-detail-desc">{productDesc}</p>
        <div className="product-detail-options">
          <label>
            Size:
            <select value={size} onChange={e => setSize(e.target.value)}>
              {sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label>
            Quantity:
            <input type="number" min="1" max="10" value={qty} onChange={e => setQty(Number(e.target.value))} />
          </label>
        </div>
        <div className="product-detail-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 