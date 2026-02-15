"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpData, signUpSchema } from "../_Schema/Schema";
import axios from "axios";
import { handleSignUp } from "../_Components/_actions/signUp";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function signup() {
  const useRouterInstance = useRouter();

  let form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    resolver: zodResolver(signUpSchema),
  });

  async function signUp(values: SignUpData) {
    const x = await handleSignUp(values);


    // form.reset();
    if (x === true) {
      useRouterInstance.push("/login");
    } else {
      alert("SignUp Failed, Please Try Again");
    }
  }

  return (
    <>
      <h2 className="text-2xl text-center"> SignUp page </h2>

      <div className="container mx-auto flex flex-col justify-center items-center">
        <form
          onSubmit={form.handleSubmit(signUp)}
          className="w-full p-6 rounded-lg shadow-md shadow-gray-600 mt-6 space-y-4"
        >
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter you Name"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

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

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your Phone Number"
                  autoComplete="off"
                  onChange={(e) => field.onChange(e.target.value)}
                  value={field.value}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
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

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="rePassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Re-Password</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Re-enter your Password"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <button className="w-1/2 mx-auto my-4 text-xl py-1 cursor-pointer rounded-3xl bg-green-600 text-white  rounded hover:bg-green-500 transition-colors duration-200">
            SignUp now
          </button>
        </form>
      </div>
    </>
  );
}
