import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import CartModal from './Components/UI/CartModal';
import './App.css';
import Resource from './Components/Resource';
import CartProvider from './store/CartProvider';
import CartButton from './Components/Cart/CartButton'; // Import the CartButton component
import CartContext from './store/CartContext';
import About from './About-Page/About';

const router=createBrowserRouter([
  {path:'/aboutUs',element:<About />}
])

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx=useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveItem = (itemTitle) => {
    cartCtx.removeItem(itemTitle); // Call the removeItem function from context
  };

  return (
    <RouterProvider router={router}>
      <CartProvider>
        <div className='align-right'>
          <CartButton onClick={toggleCart} /> {/* Use the CartButton component */}
        </div>
        {isCartOpen && (
          <CartModal
            cartItems={cartCtx.items}
            onRemoveItem={handleRemoveItem} // Pass the remove item function
          />
        )}
        <Resource isCartOpen={isCartOpen}/>
      </CartProvider>
    </RouterProvider>
  );
};

export default App;