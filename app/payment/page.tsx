"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { paymentData, paymentSchema } from "../_Schema/paymentSchema";
import { cashOrder, onlineOrder } from "../_Components/_actions/paymentActions";
import { cartContext } from "../Provider/CartContextProvider";

export default function PaymentPage() {
  let form = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      type: "",
    },

    resolver: zodResolver(paymentSchema),
  });

  const { cartId } = useContext(cartContext);

  async function handlePayment(values: paymentData) {
    const userData = {
      shippingAddress: {
        details: values.details,
        phone: values.phone,
        city: values.city,
      },
    };

    if (values.type === "cash") {
      const cashOrderResponse = await cashOrder(cartId, userData);
    } else if (values.type === "visa") {
      // Handle online payment logic here (e.g., redirect to payment gateway)

      const visaOrderResponse = await onlineOrder(cartId, userData);

      window.open(visaOrderResponse.session.url, "_blank");
    }
  }

  return (
    <>
      <h2 className="text-2xl text-center"> Payment page </h2>

      <div className="container mx-auto flex flex-col justify-center items-center">
        <form
          onSubmit={form.handleSubmit(handlePayment)}
          className="w-full p-6 rounded-lg shadow-md shadow-gray-600 mt-6 space-y-4"
        >
          <Controller
            name="details"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Details</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your details here"
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
                  placeholder="Enter your phone"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="city"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Current City</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your current city"
                  autoComplete="off"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Payment Type</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your payment method here (cash or visa)"
                  autoComplete="off"
                  
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <button className="w-1/2 mx-auto my-4 text-xl py-1 cursor-pointer rounded-3xl bg-green-600 text-white  rounded hover:bg-green-500 transition-colors duration-200">
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
}
