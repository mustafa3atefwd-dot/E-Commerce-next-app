"use client"


import axios from 'axios';
import React, { useContext, useState } from 'react'
import { handleAddToCart } from '../_Components/_actions/addToCartAction';
import { toast } from 'sonner';
import { cartContext } from '../Provider/CartContextProvider';

    type AddToCartBtnProps = {
        productId:string;
    }

export default function AddToCartBtn(productId:AddToCartBtnProps) {

    let {setnumOfCartItems} = useContext(cartContext)

    const[loading,setLoading] = useState(false)


   async function handleAddToCartClick() {
    setLoading(true)

     let data = await handleAddToCart(productId.productId);

     console.log(data)

        
        if(data.status === "success" ){
            toast.success("Product added to cart successfully!",{position:"top-center"});

            setnumOfCartItems(data.numOfCartItems)
        }
        setLoading(false)
    }
  return (
<div>
        <button onClick={() => handleAddToCartClick()} className=" absolute bottom-2 w-full cursor-pointer rounded-3xl bg-green-600 text-white   hover:bg-green-500 transition-colors duration-200">
             +Add to cart
        </button>
 </div>
  )
}
