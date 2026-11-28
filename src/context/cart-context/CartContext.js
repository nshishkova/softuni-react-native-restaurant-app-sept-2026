import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    addToCart(item) {},
    removeFromCart(index) {},
    incrementQty(index) {},
    decrementQty(index) {}
});