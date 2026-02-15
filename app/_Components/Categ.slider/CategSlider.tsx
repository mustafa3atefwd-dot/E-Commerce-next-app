import { getCategSlider } from '@/app/_Services/CategSlider';
import React from 'react'
import MySliders from '../mySliders/mySliders';

export default async  function CategSlider() {

    let CategoriesData = await getCategSlider();


    if (!CategoriesData) {
        return <div className='text-center text-red-500'>Error loading categories</div>;
      }

    let images = CategoriesData?.map((category) => category.image) || [];


  return (
    <>
    <div className='w-full p-5 bg-gray-100  mt-4  border border-gray-500 rounded-lg'>
        <h3 className="text-2xl font-bold text-center py-4">Categories</h3>

        <MySliders imageList={images} spacebetween={10} slidesperview={5} />
    </div>
       
    
    
    </>
  ) 
}
