// HomeMainSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/review.js';

function HomeMainSection() {
  const [randomReviews, Selector] = useState([]);

  useEffect(() => {
    const i = [];
    while (i.length < 2) {
      const idx = Math.floor(Math.random() * reviews.length);
      if (!i.includes(idx)) {
        i.push(idx);
      }
    }
    Selector(i.map(idx => reviews[idx]));
  }, []);

  return (
    <div class = "homemainsection">
      <h1>About Us</h1>
      <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
      <h1>Customer Reviews</h1>
      {randomReviews.map((review, index) => (
        <div key={index}>
          <p>{review.customerName}</p>
          
          <p>{review.reviewContent}</p>
          <p>Rating: {'⭐'.repeat(review.stars)}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeMainSection;