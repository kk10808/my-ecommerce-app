import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const imgcss = {
    width: '25%',
    cursor: 'pointer', // Added cursor style to indicate interaction
  };

  return (
    <div className="product-item">
      <img
        src={product.image}
        alt={product.name}
        style={imgcss}
        onMouseEnter={toggleDetails} // Moved mouse event to the image
        onMouseLeave={toggleDetails} // Moved mouse event to the image
      />
      <h3>{product.name}</h3>
      {showDetails && <p>{product.description}</p>}
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
