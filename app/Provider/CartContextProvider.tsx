"use client";

import React, { createContext, useEffect, useState } from "react";
import { getUserCart } from "../_Components/_actions/getUserCartAction";

export let cartContext = createContext();

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState(null);
  const [totalCartPrice, settotalCartPrice] = useState(0);
  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [cartId, setCartId] = useState(null);

  async function getCart() {
    let cart = await getUserCart();

    setCartId(cart.cartId);
    setnumOfCartItems(cart.numOfCartItems);
    setProducts(cart.data.products);
    settotalCartPrice(cart.data.totalCartPrice)
  }

  useEffect(function () {
    getCart();
  }, []);

  return (
    <>
      <cartContext.Provider
        value={{ products, numOfCartItems, cartId,settotalCartPrice, setnumOfCartItems,totalCartPrice,setProducts }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
