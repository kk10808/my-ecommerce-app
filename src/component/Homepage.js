// Homepage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Company Logo" />
      </div>
      <div className="company-name">
        Timeless Trinket Treasures
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
};

// HomeMainSection Component
const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const getRandomReviews = () => {
      const randomIndexes = [];
      while (randomIndexes.length < 2) {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const selectedReviews = randomIndexes.map(index => reviews[index]);
      setRandomReviews(selectedReviews);
    };

    getRandomReviews();
  }, []);

  return (
    <main>
      <section className="about-us">
        <h2>About Us</h2>
        <p>Welcome to Timeless Trinket and Treasures, where craftsmanship meets elegance. Our company was started in 2020 when we decided to share personalized jewelry with the rest of the world. Every product in our store is hand-crafted with love and gold. It is unique and personalized to each buyer. We want to redefine luxury and quality with our products that last a lifetime.</p>
      </section>

      <section className="shop-now">
        <a href="products.html"><button className="shop-now-btn">Shop Now</button></a>
      </section>

      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <span className="customer-name">{review.customerName}:</span>
              "{review.reviewContent}"
              <p className="rating">
                {Array.from({ length: review.stars }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </p>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 TIMELESS TRINKET AND TREASURES All Rights Reserved</p>
    </footer>
  );
};

// Homepage Component
const Homepage = () => {
  return (
    <div>
      <Header />
      <HomeMainSection />
      <Footer />
    </div>
  );
};

export default Homepage;
