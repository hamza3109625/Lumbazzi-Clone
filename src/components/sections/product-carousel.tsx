import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselControls,
} from "@/components/ui/carousel"

function ProductCard() {
  return (
    <Card>
  <CardContent className="flex items-center px-8 py-12 h-auto md:h-[450px] w-full">
    <div className="flex-1 text-left pr-12">
      <h2 className="text-5xl font-semibold border-b border-black pb-1">
        Face Oil
      </h2>
    </div>
    <div className="flex-1 flex justify-center">
      <Image
        src="/images/product/product_faceoil.png"
        alt="Face Oil"
        width={520}
        height={220}
        className="object-contain"
      />
    </div>
  </CardContent>
</Card>

  )
}

export default function ProductCarousel() {
  return (
    <div className="w-full flex justify-center bg-gray-50 py-12">
      <Carousel opts={{ align: "start" }} className="w-full max-w-[1600px] px-4">
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
  )
}
