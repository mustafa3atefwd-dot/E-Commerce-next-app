"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import CartContextProvider from "./CartContextProvider";


export default function MysessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
       
        <CartContextProvider>{children}</CartContextProvider>
      </SessionProvider>
    </>
  );
}
