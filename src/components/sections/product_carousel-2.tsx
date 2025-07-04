"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from "../ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { products } from "@/data/products";
import { useState } from "react";

export default function ProductCarousel2() {
  
  const [activeTab, setActiveTab] = useState<'beard' | 'skin'>('beard');
  
  
  const filteredProducts = products.filter(product => 
    activeTab === 'beard' 
      ? product.category === 'beard' 
      : product.category === 'skin'
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen md:pt-96">
      <h1 className="font-elegant text-[194px] font-thin tracking-wider text-center leading-none">
        BEST SELLERS
      </h1>

      {/* Tabs */}
      <div className="flex  mb-8 border-b mt-18 font-elegant ">
        <button
          onClick={() => setActiveTab('beard')}
          className={`text-xl tracking-wider pb-2 px-8 ${activeTab === 'beard' ? 'border-b border-black' : 'opacity-50'}`}
        >
          Beard Essentials
        </button>
        <button
          onClick={() => setActiveTab('skin')}
          className={`text-xl tracking-wider pb-2 px-8 ${activeTab === 'skin' ? 'border-b border-black' : 'opacity-50'}`}
        >
          Skin Essentials
        </button>
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
          }}
          className="max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {filteredProducts.map((product) => (
              <CarouselItem key={product.id} className="basis-1/4">
                <div className="min-h-[500px] rounded-lg bg-white flex flex-col justify-between items-center group relative p-4">
                  {/* Image */}
                  <div className="relative w-[300px] aspect-square rounded-2xl overflow-visible flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={480}
                      height={480}
                      className="absolute object-cover scale-110"
                    />
                  </div>

                  {/* Title & Price */}
                  <div className="text-center mt-4 px-4">
                    <h2 className="text-2xl font-base break-words">
                      {product.title}
                    </h2>
                    <p className="mt-2">
                      <span className="text-md font-base">{product.price}</span>
                    </p>
                  </div>

                  {/* Button at bottom */}
                  <div className="border-t border-b border-black w-32 py-2 flex justify-center mt-6">
                    <button className="tracking-widest font-base text-sm hover:font-bold">
                      SHOP
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselControls />
        </Carousel>
      </div>
    </div>
  );
}