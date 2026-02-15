

import * as z from "zod";

export const paymentSchema = z.object({
  phone: z.string().nonempty("Please Enter Your Phone Number").regex(/^\d{10}$/, "Phone number must be 10 digits"),
  details :z.string().nonempty("Please Enter Your Details"),
  city: z.string().nonempty("pleas enter city"),
  type: z.string().nonempty("Please select a payment method").refine((value) => ["cash", "visa"].includes(value), {
    message: "Payment type must be either 'cash' or 'visa'",
  }),

  

})

export type paymentData = z.infer<typeof paymentSchema>