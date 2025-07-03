import { TextFade } from "./animations/TextFade";
import { Button } from "./ui/button";

export default function Heading() {
  return (
    <div className="h-screen flex justify-center items-center pt-10 ">
      <TextFade
        direction="up"
        className="flex flex-col items-center"
        duration={1}
      >
        <div>
          <p className="text-[85px] font-thin font-elegant text-center tracking-tighter md:leading-tight">
            High Performance Natural Men's Care
          </p>
          <p className="text-center mx-auto font-thin italic font-elegant text-[85px] pb-10">
            Trusted By Leaders
          </p>
        </div>

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
  );
}
