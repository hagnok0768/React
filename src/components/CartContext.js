import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
        setTotalAmount((prevTotal) => prevTotal + parseFloat(item.price.replace('R$ ', '')));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, totalAmount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
