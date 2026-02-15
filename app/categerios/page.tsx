import React from "react";
import { getAllCategs } from "../_Services/GetAllCategServices";
import Image from "next/image";

export default async function categerios() {
  let CategoriesData = await getAllCategs();

  if (!CategoriesData) {
    return (
      <div className="text-center text-red-500">Error loading categories</div>
    );
  }

  return (
    <>
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {CategoriesData.map((category) => (
            <div key={category._id} className="shadow shadow-green-500 hover:scale-90 hover:duration-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-green-400 hover:shadow-lg p-4 rounded-lg shadow  h-full sm:flex sm:flex-col items-center" > 
            <div className=" p-4 rounded-lg h-full sm:flex sm:flex-col items-center ">
                <Image src={category.image} alt={category.name} width={200} height={200} className="w-full object-contain mb-4" />
            </div>
                <h4 className="text-lg font-semibold mb-2">{category.name}</h4>
            </div> 
        ))}

    </div>
</>
  );
}
