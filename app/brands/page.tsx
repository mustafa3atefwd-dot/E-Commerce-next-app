import React from 'react'

export default async function brands() {


async function getBrands() {
try {

  let response = await fetch( "https://ecommerce.routemisr.com/api/v1/brands", );

  let {data} = await response.json();


  return data; // Return the data

} catch (error) {
console.error("Error fetching brands:", error);
return null;

}
};

const brandsData = await getBrands();



  return (
    <div className="container mx-auto py-10 mt-10">
      <h3 className='text-3xl text-green-600 font-bold text-center mb-10 py-10'> ALL Brands </h3>

      {brandsData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandsData.map((brand) => (
            <div key={brand._id} className="border rounded-lg p-4  hover:scale-140 hover:duration-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-green-400 hover:shadow-lg">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-center">{brand.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Loading brands...</p>
        </div>
      )}

    </div>
  )
}
