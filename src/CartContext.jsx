import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => 
        item.id === product.id && 
        item.selectedColor === product.selectedColor && 
        item.selectedSize === product.selectedSize
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id && 
          item.selectedColor === product.selectedColor && 
          item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const increaseQuantity = (productId, selectedColor, selectedSize) => {
    setCart(
      cart.map((item) =>
        item.id === productId && 
        item.selectedColor === selectedColor && 
        item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, selectedColor, selectedSize) => {
    setCart(
      cart.map((item) =>
        item.id === productId && 
        item.selectedColor === selectedColor && 
        item.selectedSize === selectedSize
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const values = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
