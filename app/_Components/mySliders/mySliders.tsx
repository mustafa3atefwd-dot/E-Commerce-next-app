"use client";


import { Swiper, SwiperSlide ,} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import{Pagination,Autoplay, } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import Image from 'next/image';



type SliderProps = {
    imageList: string[];
    spacebetween?: number;
    slidesperview?: number;

};

export default function MySliders({imageList, spacebetween=0, slidesperview=1}: SliderProps) {
  return (
    <Swiper
    loop={true}
      spaceBetween={spacebetween}
      slidesPerView={slidesperview}
        modules={[Navigation,Pagination,Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
    >

        {imageList.map((image, index) => (
            <SwiperSlide key={index}>
               <div className="w-full h-120 flex items-center justify-center">
                <Image src={image} alt={`Slide ${index}`} width={300} height={200} className="rounded-lg border border-gray-300 border-rounded" />
               </div>
            </SwiperSlide>
        ))}
      ...
    </Swiper>
  );
};