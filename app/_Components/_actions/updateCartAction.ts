"use server"

import axios from "axios"
import { headers } from "next/headers"
import { getUserToken } from "./addToCartAction"


export async function upDateCart(id:string ,  count:number) {

let token =  await getUserToken()

   try {
   const {data} =  await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {count},
        {headers:{token : token as string}}
        

    )
    return data
   } catch (error) {
    
    console.log(error)
   }




}


// delete item function

export async function deleteItem(id:string ,) {

let token =  await getUserToken()

   try {
   const {data} =  await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {headers:{token : token as string}}
        

    )
    return data
   } catch (error) {
    
    console.log(error)
   }




}


// clear user Cart function

export async function clearCart() {

let token =  await getUserToken()

   try {
   const {data} =  await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
        {headers:{token : token as string}}
        

    )
    return data
   } catch (error) {
    
    console.log(error)
   }




}
