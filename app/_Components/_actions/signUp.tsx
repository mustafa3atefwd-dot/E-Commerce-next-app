"use server";

import axios from "axios";
import { SignUpData } from "../../_Schema/Schema";
import Error from "next/error";

export async function handleSignUp(values: SignUpData): Promise<boolean> {
  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    values,
  );


  if (data.message === "success") {
    return true;
  } else {
    return false;
  }
}
