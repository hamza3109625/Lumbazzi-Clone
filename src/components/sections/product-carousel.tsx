import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from "@/components/ui/carousel";
import Button from "@/components/custom/ui/button";

export function ProductCard() {
  return (
    <Card className="group relative rounded-[40px] overflow-hidden text-white">
      <div className="absolute inset-0 z-11 bg-[url('/images/background/noise-bg.png')] opacity-60 pointer-events-none" />

      <div className="absolute inset-0 z-[10] bg-gradient-to-br from-[#5d5e1e] to-[#3c3d1c]" />

      <CardContent className="relative z-10 flex items-center justify-between h-[420px] px-12">
        <div className="relative w-1/2 space-y-1">
          <div className="transition-all duration-500 group-hover:-translate-y-4">
            <h2 className="text-6xl font-thin font-elegant">Face Oil</h2>

            <div className="mt-2 h-[1px] bg-white opacity-50 w-full transition-all duration-500 group-hover:w-[212px]" />
          </div>

          <Button className="opacity-0 translate-y-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-8">
            Shop Now
          </Button>
        </div>
        {/* Leaf Starts */}
        <Image
          src={"/images/carousel/leaf-1.webp"}
          alt="Leaf top left"
          width={300}
          height={300}
          className="absolute -top-12 left-120 z-30 w-[200px] h-[200px] object-contain 
             opacity-0 scale-90 
             transition-all duration-500 ease-in-out 
             group-hover:opacity-100 group-hover:scale-100"
        />
        <Image
          src={"/images/carousel/leaf-2.webp"}
          alt="Leaf left bottom"
          width={300}
          height={300}
          className="absolute top-70 left-105 rotate-[240deg] z-50 w-[200px] h-[200px] object-contain 
             opacity-0 scale-90 
             transition-all duration-500 ease-in-out 
             group-hover:opacity-100 group-hover:scale-100"
        />
        <Image
          src={"/images/carousel/leaf-2.webp"}
          alt="Leaf right bottom"
          width={300}
          height={300}
          className="absolute top-50 left-177 -z-10 w-[200px] h-[200px] object-contain 
             opacity-0 scale-90 
             transition-all duration-500 ease-in-out 
             group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Leaf Ends*/}
        <Image
          src="/images/product/product_faceoil.png"
          alt="Face Oil"
          width={400}
          height={350}
          className=" object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.4] group-hover:rotate-[15deg]"
        />
      </CardContent>
    </Card>
  );
}

export default function ProductCarousel() {
  return (
    <div className="w-full flex justify-center py-12">
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[1600px] px-4"
      >
        <CarouselContent className="flex">
          {[...Array(5)].map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full max-w-[950px]"
            >
              <div className="p-4">
                <ProductCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselControls />
      </Carousel>
    </div>
  );
}
