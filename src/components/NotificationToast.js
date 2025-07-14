import React, { useState, useEffect } from 'react';
import './NotificationToast.css';

const NotificationToast = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`notification-toast ${!isVisible ? 'closed' : ''}`}>
      <button className="toast-close-btn" onClick={handleClose}>
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="toast-banner">
        <img src="/assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70" />
      </div>

      <div className="toast-detail">
        <p className="toast-message">
          Someone in new just bought
        </p>
        <p className="toast-title">
          Rose Gold Earrings
        </p>
        <p className="toast-meta">
          <time datetime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default NotificationToast; 