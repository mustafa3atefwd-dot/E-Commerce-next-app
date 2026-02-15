"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { cartContext } from "../Provider/CartContextProvider";
import Image from "next/image";

import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import {
  clearCart,
  deleteItem,
  upDateCart,
} from "../_Components/_actions/updateCartAction";

export default function carts() {
  const data = useContext(cartContext);
  const router = useRouter();
  const [navigating, setNavigating] = useState(false);

  //
  return (
    <>
      <div className="text-center font-bold text-2xl italic mt-5 text-black mb-6">
        <h2>Your Shopping Cart</h2>
      </div>
      <div className="flex justify-end mt-12">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          onClick={async () => {
            const cleardata = await clearCart();
            data?.setProducts(cleardata.data);
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="max-w-5xl mx-auto py-8 px-4 md:px-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto mb-8">
            <div className="bg-gray-100 rounded-xl shadow p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                Total Summary
              </h3>
              <div className="flex flex-col gap-2 w-full mb-4">
                <div className="flex justify-between w-full">
                  <span className="font-semibold">Total price:</span>
                  <span className="text-green-600 font-bold">
                    {data.totalCartPrice}
                  </span>
                </div>
                <div className="flex justify-between w-full">
                  <span className="font-semibold">Total items:</span>
                  <span className="text-green-600 font-bold">
                    {data.numOfCartItems}
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                disabled={
                  !Array.isArray(data?.products) ||
                  data?.products.length === 0 ||
                  navigating
                }
                onClick={async () => {
                  if (
                    !Array.isArray(data?.products) ||
                    data?.products.length === 0
                  )
                    return;
                  setNavigating(true);
                  try {
                    router.push("/payment");
                  } finally {
                    setNavigating(false);
                  }
                }}
                aria-label="Proceed to checkout"
              >
                {navigating ? "Navigating..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {data?.products?.map((item: any, idx: number) => (
            <div
              key={item._id || idx}
              className="flex flex-col md:flex-row items-center border-b border-gray-200 py-4"
            >
              <div className="w-full md:w-1/5 flex justify-center mb-4 md:mb-0">
                <Image
                  alt={item.product.title || "Product image"}
                  className="rounded-md object-cover"
                  src={item.product.imageCover}
                  width={160}
                  height={160}
                />
              </div>
              <div className="w-full md:w-4/5 flex flex-col md:flex-row md:justify-between items-start md:items-center px-2">
                <div className="mb-2 md:mb-0">
                  <h5 className="text-lg font-bold">
                    {item.product.title || "Product Name"}
                  </h5>
                  <p className="text-gray-800 font-bold mb-2">
                    Brand: {item.product.brand?.name}
                  </p>
                  <p className="text-gray-800 md:text-sm font-bold mb-2">
                    Category: {item.product.category?.name}
                  </p>
                  <h6 className="text-lg font-semibold mb-2">
                    {" "}
                    $ {item.price ? `${item.price} EGP` : ""}
                  </h6>
                  <button
                    onClick={async () => {
                      const newItems = await deleteItem(item.product.id);
                      data.setProducts(newItems.data.products);
                    }}
                    className="text-red-500 hover:text-red-700 text-sm mt-2 flex items-center"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={async () => {
                      const newData = await upDateCart(
                        item.product.id,
                        item.count + 1,
                      );
                      data.setProducts(newData.data.products);
                    }}
                    className="bg-green-200 hover:bg-green-300 rounded px-3 py-1 text-lg font-bold"
                  >
                    <IoIosAddCircleOutline />
                  </button>
                  <span className="mx-2 text-lg font-semibold">
                    {item.count || 1}
                  </span>
                  <button
                    onClick={async () => {
                      const newData = await upDateCart(
                        item.product.id,
                        item.count - 1,
                      );
                      data.setProducts(newData.data.products);
                    }}
                    className="bg-green-200 hover:bg-green-300 rounded px-3 py-1 text-lg font-bold"
                  >
                    <IoMdRemoveCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
