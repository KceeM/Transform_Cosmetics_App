import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
        if (existingItem) {
            return prev.map(item =>
              item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
    });

    toast.success(`${product.name} added to cart!`, {
       
       style: {
         background: "#111",
         color: "#fff",
         borderRadius: "8px",
         fontSize: "0.9rem"

        }
    });
  };  

  const increaseQty = (id) => {
    setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
        prev.map(item =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
        )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addToWishlist = (product) => {
    setWishlistItems(prev => [...prev, product]);
    toast.info(`${product.name} added to wishlist.`, {
      icon: <img src={require("../images/Icons/Heart7.png")} alt="cart" style={{ width: "20px" }} />, 
      style: {
          background: "#fff",
          color: "#111",
          borderRadius: "8px",
          fontSize: "0.9rem"
        }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, 
      increaseQty, decreaseQty,
      wishlistItems, addToWishlist, removeFromWishlist
    }}>
      {children}
    </CartContext.Provider>
  );
};
