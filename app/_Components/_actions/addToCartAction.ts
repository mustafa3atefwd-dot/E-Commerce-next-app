"use server"
import axios from "axios";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
// import { toast } from "sonner";

export async function handleAddToCart(productId: string) {
    
 let usertoken = await   getUserToken()
   try {
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
        productId: productId
    },
    
    {
    headers:{
        token:usertoken as string
    }}
    );
    
    
    return data;
   } catch (error) {
    console.error("Error adding product to cart:", error);
   }
  };

export async function getUserToken(){

let myCookies = await cookies()

let cookiesToken = myCookies.get("next-auth.session-token")

//                     this name will change in production 

let decodeedJWT = await decode({token : cookiesToken?.value , secret : process.env.NEXTAUTH_SECRET!})

console.log(decodeedJWT?.accessToken)

return decodeedJWT?.accessToken;


}