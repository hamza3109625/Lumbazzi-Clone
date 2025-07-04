import Image from "next/image";
import Button from "@/components/custom/ui/white-button";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
    return (
        <nav className="navbar flex justify-between items-center p-5 md:p-8 md:px-18 bg-trasnparent">
            <div className="logo flex items-center space-x-8">
                <Image src={"/images/Logo/B.png"} alt="Logo" width={20} height={20} className="md:hidden" />

                <div className="hidden md:flex items-center space-x-9">
                    <Image src={"/images/Logo/B.png"} alt="Logo" width={50} height={50} />
                    <Image src="/images/Logo/LUMBAZZI.png" alt="Logo" width={190} height={190} />
                </div>

            </div>

            <Sheet>
                <SheetTrigger> <RxHamburgerMenu className="md:hidden text-xl text-white" /></SheetTrigger>
                <SheetContent className="w-[800px] sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription asChild>
                            <div className="mt-32 flex flex-col items-center gap-6 text-base text-black w-full" >
                                <a className="block w-64 text-2xl border-t border-b p-4 text-center" href="/">Proper Shop</a>
                                <a className="block w-64 text-2xl border-t border-b p-4 text-center" href="/">Our Story</a>
                                <a className="block w-64 text-2xl border-t border-b p-4 text-center" href="/">Why Lumbazzi</a>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>



            <div className="hidden md:flex items-center space-x-10">
                <div>
                    <ul className="nav-links flex gap-14 text-base text-white">
                        <li><a href="/">Proper Shop</a></li>
                        <li><a href="/">Our Story</a></li>
                        <li><a href="/">Why Lumbazzi</a></li>
                    </ul>
                </div>

                <div className="flex items-center space-x-6">

                    <CiSearch className="text-2xl text-white" />
                    <AiOutlineUser className="text-2xl text-white text-light" />
                    <SlHandbag className="text-2xl text-white" />

                </div>
            </div>
        </nav>
    );
}