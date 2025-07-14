import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: 'Love the quality! Got so many compliments!',
    name: 'Aisha',
    photo: '/assets/images/u.jpeg',
  },
  {
    quote: 'Fast shipping and the fit is perfect.',
    name: 'Raj',
    photo: '/assets/images/p.jpeg',
  },
  {
    quote: 'Will definitely shop again. Highly recommended!',
    name: 'Meera',
    photo: '/assets/images/d.jpeg',
  },
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-heading">What Our Customers Say</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <img src={t.photo} alt={t.name} className="testimonial-photo" />
          <p className="testimonial-quote">"{t.quote}"</p>
          <p className="testimonial-name">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection; 