import Button from "@/components/custom/ui/white-button";
import Image from "next/image";
import Navbar from "@/components/ui/navbar"; 
import { Sheet } from "@/components/ui/sheet";
import Hero from "@/components/sections/Hero/hero-image";
import ProductCarousel from "@/components/sections/product-carousel";
import Heading from "@/components/heading";
import ProductCarousel2 from "@/components/sections/product_carousel-2";


export default function Home() {
  return (
    <div className="main-page">

    <Hero/>
    <ProductCarousel />
    <Heading />
    <ProductCarousel2 />
  

    </div>
  );
}
