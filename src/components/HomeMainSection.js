//HomeMainSection
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/review.js';

function HomeMainSection() {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const indexes = [];
    while (indexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    setSelectedReviews(indexes.map(index => reviews[index]));
  }, []);

  return (
    <div className="homemainsection">
      <h1>About Us</h1>
      <p>Welcome to our online store! We're dedicated to offering top-notch products and outstanding customer service. Discover more about our journey and dedication to meeting your needs.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
      <h1>Customer Reviews</h1>
      {selectedReviews.map((review, index) => (
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
