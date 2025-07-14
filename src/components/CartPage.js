import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const steps = ['Add Details', 'Payment Option', 'Place Order'];

const CartPage = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = Math.round(total * 0.2);
  const finalTotal = total - discount;

  return (
    <div className="cart-page-container">
      <div className="cart-steps">
        {steps.map((step, idx) => (
          <div
            key={step}
            className={`cart-step${currentStep === idx ? ' active' : ''}${idx < currentStep ? ' completed' : ''}`}
            onClick={() => setCurrentStep(idx)}
          >
            <span className="cart-step-num">{idx + 1}</span> {step}
          </div>
        ))}
      </div>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <button className="cart-shop-btn" onClick={() => navigate('/')}>Go Shopping</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cart.map(item => (
              <div className="cart-item" key={item.id + '-' + item.size}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-size">Size: {item.size}</div>
                  <div className="cart-item-price">{item.price}</div>
                  <div className="cart-item-qty">
                    Qty:
                    <button onClick={() => updateQty(item.id, item.size, Math.max(1, item.qty - 1))}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.size, item.qty + 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id, item.size)}>&times;</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Total MRP</span>
              <span>₹{total}</span>
            </div>
            <div className="cart-summary-row">
              <span>Discount</span>
              <span className="cart-discount">-₹{discount}</span>
            </div>
            <div className="cart-summary-row">
              <span>Platform Fee</span>
              <span>₹20</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total Amount</span>
              <span>₹{finalTotal + 20}</span>
            </div>
            <button className="cart-placeorder-btn" onClick={() => {clearCart(); alert('Order placed!')}}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 