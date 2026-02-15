import getSingleProduct from '@/app/_Services/singleProduct';
import AddToCartBtn from '@/app/ProductCard/AddToCartBtn';
import Image from 'next/image';
import React from 'react'


type productDetailsProps = {
  params: {
    id: string;
  };
};

export default  async function productDetils(props: productDetailsProps) {
  const data = await props.params;
  const product = await getSingleProduct(data.id);

  console.log("Product details:", product);

  if (!product) {
    return <div className="p-8 text-center">Product not found or failed to load.</div>;
  }


  return (
    <>

    <div className='grid grid-cols-4 gap-4 p-4  items-center border border-gray-500 rounded-lg shadow-xl m-10'>


      <div className='border border-gray-500 shadow-xl rounded-lg p-4'>
        <Image src={product?.imageCover || ''} alt={product?.title || ''} width={400} height={400} className='w-full object-contain' />
      </div>

      <div className='col-span-3 px-4 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>{product?.title}</h1>
        <p className='text-gray-600'>{product?.description}</p>
        {product?.priceAfterDiscount ? (
            <div className="flex gap-3">
              <p className='text-lg font-semibold'>Product Price : </p>
              <p className="text-red-500 line-through mb-2">${product.price}</p>
              <p className="text-green-600 font-bold mb-2 text-xl">
                ${product.priceAfterDiscount}
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-800 font-bold mb-2">${product?.price}</p>
            </>
          )}
        <p className='text-lg font-semibold'>Category : {product?.category?.name}</p>
        <p className='text-lg font-semibold'>Brand :  {product?.brand?.name}</p>
        <p className='text-lg font-semibold'>Rating : {product?.ratingsAverage}</p>
          <div className='relative w-full mt-8 py-5'>
                    <AddToCartBtn productId={product?.id || ''} />
          </div>
              
      </div>
    </div>
    
    
    
    
    
    </>
  )
}
