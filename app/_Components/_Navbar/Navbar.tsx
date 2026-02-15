"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "../../src/images/freshcart-logo.svg";
import { signOut, useSession } from "next-auth/react";
import { cartContext } from "@/app/Provider/CartContextProvider";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {

const session = useSession()

let {numOfCartItems}: any = useContext(cartContext)



function handleLogOut(){
  signOut({redirect:true , callbackUrl:"/login"})

}

  return (
    <>
      <nav className="bg-white text-black font-bold text-xl italic sticky top-0 z-10 flex justify-between p-4 items-center">
        <h1>
          <Image src={logo} alt="logo" width={120} height={30} />
        </h1>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li>
              <Badge>{numOfCartItems}</Badge>

              <Link href="/carts">Cart</Link>
            </li>
            <li>
              <Link href="/wishlist">WishList</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categerios">Categories</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-4">

            {session.data? <button onClick={handleLogOut} className="font-bold text-black cursor-pointer" >LogOut</button> :  <>
          
            <li> 
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>signup</Link>
            </li>   </>  }
         
          </ul>
        </div>
      </nav>
    </>
  );
}
