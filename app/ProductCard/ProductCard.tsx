import { ProductType } from "@/app/_types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import { FaRegHeart } from "react-icons/fa";

type ProudectCardProps = {
  product: ProductType;
};
export default function ProudectCard({ product }: ProudectCardProps) {
  return (
    <div className="shadow-lg py-5 relative z-0 hover:z-10 rounded-lg hover:scale-105 hover:duration-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-green-400 hover:shadow-lg">
      {/* Heart Icon for Wishlist */}
      <button
        className="absolute top-3 right-3 text-red-400 hover:text-red-700 text-2xl z-20 bg-white rounded-full p-2 shadow-md"
      >
        <FaRegHeart />
      </button>
      <Link
        href={`/proudect/${product.id}`}
        className=""
      >
        <div className="border border-gray-300  p-4 rounded-lg shadow  h-full sm:flex sm:flex-col items-center ">
          <Image
            src={product.imageCover}
            alt={product.title}
            width={200}
            height={200}
            className="w-full object-contain mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">
            {product.title.split(" ").slice(0, 3).join(" ")}
          </h3>
          <p className="text-gray-800 font-bold mb-2">
            Brand : {product.brand.name}
          </p>
          <p className="text-gray-800 md:text-sm font-bold mb-2">
            Category : {product.category.name}
          </p>
          {product.priceAfterDiscount ? (
            <div className="flex gap-3">
              <p className="text-red-500 line-through mb-2">${product.price}</p>
              <p className="text-green-600 font-bold mb-2 text-xl">
                ${product.priceAfterDiscount}
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-800 font-bold mb-2">${product.price}</p>
            </>
          )}
        </div>
      </Link>
      <AddToCartBtn productId={product.id} />
    </div>
  );
}
