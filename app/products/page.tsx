import React from "react";
import ProudectCard from "../ProductCard/ProductCard";
import getAllproudects from "../_Services/AllproductsServ";

export default async function productsPage() {
  const products = await getAllproudects();
  return (
    <div>
        <div className="container mx-auto shadow-lg rounded-lg p-4 mt-10 shadow-gray-500">
          <h3 className="text-3xl mt-10 font-bold text-center py-4">
            All Products
          </h3>
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-4 p-4">
            {products?.map((product) => (
              <ProudectCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </div>
  );
}
