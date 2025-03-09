"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext(null);

const useCartContext = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const storage = useRef(useLocalStorage());

  useEffect(() => {
    const storageCart = storage.current.getItem("cart");
    if (storageCart) setCart(storageCart);
  }, []);

  const updateCart = () => {
    const storageCart = storage.current.getItem("cart");
    setCart(storageCart);
  };

  const addToCart = (productId, quantity = 1) => {
    if (!productId || !quantity) return;
    const currentCart = storage.current.getItem("cart");
    let newCart;
    if (!currentCart) {
      newCart = [{ productId, quantity }];
    } else if (currentCart.length > 0) {
      if (currentCart.find((el) => el.productId === productId)) {
        newCart = currentCart.map((cartItem) => {
          if (cartItem.productId !== productId) return cartItem;
          return {
            productId: cartItem.productId,
            quantity: cartItem.quantity + quantity,
          };
        });
      } else {
        newCart = [...currentCart, { productId, quantity }];
      }
    }
    storage.current.setItem("cart", newCart);
    updateCart();
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCartContext };
