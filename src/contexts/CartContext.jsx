import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem("accessToken"); // Assuming accessToken is stored here
  const apiUrl = "YOUR_API_URL"; // Replace with your actual API URL
  const config = { apiUrl }; // You can manage your config object as needed

  const fetchCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${config.apiUrl}/v1/cart`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch cart");
      }
      const data = await response.json();
      setItems(data.data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchCart();
    } else {
      setLoading(false);
      setItems([]);
    }
  }, [accessToken]);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await fetch(`${config.apiUrl}/v1/cart/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add item to cart");
      }
      const data = await response.json();
      setItems(data.data.items);
    } catch (error) {
      setError(error.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch(`${config.apiUrl}/v1/cart/items/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to remove item from cart");
      }
      const data = await response.json();
      setItems(data.data.items);
    } catch (error) {
      setError(error.message);
      // Optionally handle error feedback to the user
    }
  };

  // Since the API returns the updated cart after adding/removing,
  // we don't necessarily need separate increase/decrease quantity functions
  // that only update the local state. We can directly use addToCart
  // with a quantity or implement a specific update quantity endpoint if needed.

  const clearCart = async () => {
    try {
      const response = await fetch(`${config.apiUrl}/v1/cart`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to clear cart");
      }
      setItems([]);
    } catch (error) {
      setError(error.message);
    }
  };

  const values = {
    items,
    loading,
    error,
    addToCart,
    removeFromCart,
    clearCart,
    refetchCart: fetchCart, // Exposing a function to manually refetch the cart
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
