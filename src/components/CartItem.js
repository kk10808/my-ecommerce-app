import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity, image } = item;
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} style={imageStyle} />
      </div>
      <div className="cart-item-details">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${totalPrice}</p>
        <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartItem;

const imageStyle = {
  width: '100%',
  maxWidth: '150px',
};
