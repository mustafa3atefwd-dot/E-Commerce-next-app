"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { LogInData,LogInSchema } from "../_Schema/LogInSchema";
import { signIn } from "next-auth/react";


export default function logIn() {


let form = useForm({
  defaultValues: {
    email: "",
    password: "",

  },

  resolver: zodResolver(LogInSchema),
})

async function handleLogIn(values: LogInData){


  signIn("credentials", {
    ...values,
    redirect: true,
    callbackUrl: "/",
  })}



return<>
  
<h2 className='text-2xl text-center'> LogIn page </h2>
  
  
<div className="container mx-auto flex flex-col justify-center items-center">

  <form onSubmit={form.handleSubmit(handleLogIn)} className="w-full p-6 rounded-lg shadow-md shadow-gray-600 mt-6 space-y-4">

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
            
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your Email"
              autoComplete="off"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
        )}
        />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
            
              {...field}
              id={field.name}
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your Password"
              autoComplete="off"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
        />

        <button  className="w-1/2 mx-auto my-4 text-xl py-1 cursor-pointer rounded-3xl bg-green-600 text-white  rounded hover:bg-green-500 transition-colors duration-200">
             LogIn Now
        </button>
  </form>
</div>


  </>
}