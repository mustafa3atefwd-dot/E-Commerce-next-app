import { get } from "http";
import Image from "next/image";
import getAllproudects from "./_Services/AllproductsServ";
import ProudectCard from "./ProductCard/ProductCard";
// import CategSlider from "./_Components/Categ.slider/CategSlider";
import { lazy, Suspense } from "react";

let CategSlider = lazy(() => import("./_Components/Categ.slider/CategSlider"));

export default async function Home() {
  const products = await getAllproudects();

  return (
    <>
      <Suspense fallback={<div className="text-center text-blue-500 ">Loading categories...</div>}>
        <CategSlider />
      </Suspense>

      <div className="container mx-auto shadow-lg rounded-lg p-4 mt-10 shadow-gray-500">
        <h3 className="text-3xl mt-10 font-bold text-center text-green-600 py-4">All Products</h3>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-4 p-4">

          {products?.map((product) => (
            <ProudectCard key={product.id} product={product}  />
            
          ))}
          
          
        </div>
        
      </div>
    </>
  );
}
