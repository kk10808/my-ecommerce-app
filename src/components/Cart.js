import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${calculateTotalPrice()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
