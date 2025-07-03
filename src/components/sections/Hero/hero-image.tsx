import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Button from "@/components/custom/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden text-white bg-gradient-to-r from-slate-900 to-slate-950">
      <Navbar />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 pt-6">
        <h1 className="font-elegant text-4xl md:text-4xl ">Master Your Look</h1>
        <h2 className="font-elegant text-4xl md:text-6xl">
  Define Your <span className="italic">Legacy</span>
</h2>

        <p className=" text-base md:text-xl tracking-wide">Proper Care for the Modern Man</p>
        <Button>EXPERIENCE EXCELLENCE</Button>
      </div>

      <div className="relative bottom-0 left-0 w-full">
        <Image
          src="/images/grass.webp"
          alt="Grass foreground"
          width={1600}
          height={200}
          quality={80}
          priority
          className="w-full"
        />
        <Image
          src="/images/products.webp"
          alt="Products foreground"
          width={1400}
          height={200}
          quality={90}
          className="w-full absolute bottom-0 left-0 object-cover z-10"
        />
      </div>
    </section>
  );
}
