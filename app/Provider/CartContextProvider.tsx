"use client";

import React, { createContext, useEffect, useState } from "react";
import { getUserCart } from "../_Components/_actions/getUserCartAction";

type CartProduct = {
  _id?: string;
  count?: number;
  price?: number;
  product: any;
};

type CartContextType = {
  products: CartProduct[];
  setProducts: (p: CartProduct[]) => void;
  totalCartPrice: number;
  settotalCartPrice: (n: number) => void;
  numOfCartItems: number;
  setnumOfCartItems: (n: number) => void;
  cartId: string | null;
};

export let cartContext = createContext<CartContextType>({
  products: [],
  setProducts: () => {},
  totalCartPrice: 0,
  settotalCartPrice: () => {},
  numOfCartItems: 0,
  setnumOfCartItems: () => {},
  cartId: null,
});

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [totalCartPrice, settotalCartPrice] = useState<number>(0);
  const [numOfCartItems, setnumOfCartItems] = useState<number>(0);
  const [cartId, setCartId] = useState<string | null>(null);

  async function getCart() {
    let cart = await getUserCart();

    setCartId(cart.cartId ?? null);
    setnumOfCartItems(cart.numOfCartItems ?? 0);
    setProducts((cart.data && cart.data.products) || []);
    settotalCartPrice((cart.data && cart.data.totalCartPrice) || 0);
  }

  useEffect(function () {
    getCart();
  }, []);

  return (
    <>
      <cartContext.Provider
        value={{
          products,
          numOfCartItems,
          cartId,
          settotalCartPrice,
          setnumOfCartItems,
          totalCartPrice,
          setProducts,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
