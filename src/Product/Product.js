import React, { useState, useContext } from 'react';
import CartModal from '../Components/UI/CartModal';
import Resource from '../Components/Resource';
import CartProvider from '../store/CartProvider';
import CartButton from '../Components/Cart/CartButton';
import CartContext from '../store/CartContext';

const ResourceWithCartButton=()=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartCtx = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartProvider>
            <div>
                <CartButton onClick={toggleCart} /> 
            </div>
            {isCartOpen && (
                <CartModal
                    cartItems={cartCtx.items}
                    onRemoveItem={cartCtx.removeItem}
                    onClose={toggleCart}
                />
            )}
            <Resource />
        </CartProvider>
    );
};

export default ResourceWithCartButton;