import * as z from "zod";

export const signUpSchema = z.object({
  name : z.string().nonempty("Please Enter Your Name").min(1, "Name is required"),
  email : z.email("Please Enter a Valid Email").nonempty("Please Enter Your Email"),
  phone : z.string().nonempty("Please Enter Your Phone Number").min(10, "Phone Number must be at least 10 digits") ,
  password : z.string().min(6, "Password must be at least 6 characters"),
  rePassword: z.string().min(6, "Re-entered password must be at least 6 characters"),
}).refine((data) => data.password === data.rePassword, {
   path: ["rePassword"],
   error : "Passwords do not match" ,
});


export type SignUpData = z.infer<typeof signUpSchema> ;