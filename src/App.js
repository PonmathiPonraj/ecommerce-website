import React, { useState } from 'react';
import CartModal from './Components/UI/CartModal';
import Resource from './Components/Resource';

function App() {
  const initialCart = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },

  ];

  const [cartItems, setCartItems] = useState(initialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleRemoveItem = (title) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button onClick={toggleCart}>
        Cart
      </button>
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onClose={toggleCart}
        />
      )}
      <Resource />
    </div>
  );
};

export default App;