import { TextFade } from "./animations/TextFade";
import { Button } from "./ui/button";

export default function Heading() {
  return (
    <div className="h-screen flex justify-center items-center pt-10 mb-12">
      <div className="flex flex-col items-center">
        <TextFade direction="up" duration={0.8} staggerChildren={0.1}>
          <p className="text-[85px] font-thin font-elegant text-center tracking-tighter md:leading-tight">
            High Performance Natural Men's Care
          </p>
        </TextFade>

        <TextFade direction="up" duration={1.1} staggerChildren={0.1}>
          <p className="text-center mx-auto font-thin italic font-elegant text-[85px] pb-10">
            Trusted By Leaders
          </p>
        </TextFade>

        <TextFade direction="up" duration={1.3}>
          <div className="p-[1px] rounded-full bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 inline-block">
            <Button
              variant="ghost"
              className="rounded-full bg-white text-black border-none px-10 py-8 tracking-[0.3em] text-sm font-light uppercase hover:bg-white hover:px-15"
            >
              WHY LUMBAZZI
            </Button>
          </div>
        </TextFade>
      </div>
    </div>
  );
}

