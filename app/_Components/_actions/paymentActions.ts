"use server"

import axios from "axios";
import { getUserToken } from "./addToCartAction";

type ShippingAddress = {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  };
};

export async function cashOrder(cartId: string, userData: ShippingAddress) {
  const token = await getUserToken();
  try {
    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
      userData,
      {
        headers: {
          token: token as string,
        },
      },
    );
    console.log("cashOrder response:", data);
    return data;
  } catch (error) {
    console.error("cashOrder error:", error);
    throw error;
  }
}

export async function onlineOrder(cartId: string, userData: ShippingAddress) {
  const token = await getUserToken();

  try {
    const {data} = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      userData,
      {
        headers: {
          token: token as string,
        },
      },
    );
    console.log("onlineOrder response:", data);
    
    return data;
  } catch (error) {
    console.error("onlineOrder error:", error);
    throw error;
  }
}
