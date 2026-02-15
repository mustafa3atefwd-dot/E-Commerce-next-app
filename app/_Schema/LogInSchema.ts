import * as z from "zod";

export const LogInSchema = z.object({

  email : z.email("Please Enter a Valid Email").nonempty("Please Enter Your Email"),
  password : z.string().min(6, "Password must be at least 6 characters"),

})

export type LogInData = z.infer<typeof LogInSchema> ;