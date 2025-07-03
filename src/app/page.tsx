import Button from "@/components/custom/ui/button";
import Image from "next/image";
import Navbar from "@/components/ui/navbar"; 
import { Sheet } from "@/components/ui/sheet";
import Hero from "@/components/sections/Hero/hero-image";
import ProductCarousel from "@/components/sections/product-carousel";


export default function Home() {
  return (
    <div className="main-page">

      <Hero/>

    <ProductCarousel />
  

    </div>
  );
}
