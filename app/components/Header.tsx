"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

// Icons
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";

interface HeaderProps {
   children: React.ReactNode;
   className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className, children }) => {
   const router = useRouter();

   const handleLogout = () => {};
   return (
      <div
         className={twMerge(
            `h-fit p-6 bg-gradient-to-b from-emerald-700 )`,
            className
         )}
      >
         <div className="w-full mb-4 flex items-center justify-between">
            {/* Screen */}
            <div className="hidden md:flex gap-x-2 items-center">
               <button
                  onClick={() => router.back()}
                  className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
               >
                  <RxCaretLeft size={35} className="text-white" />
               </button>
               <button
                  onClick={() => router.forward()}
                  className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
               >
                  <RxCaretRight size={35} className="text-white" />
               </button>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden gap-x-2 items-center">
               <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                  <HiHome className="text-black" size={20} />
               </button>
               <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                  <BiSearch className="text-black" size={20} />
               </button>
            </div>
            <div className="flex justify-between items-center gap-x-4">
               <>
                  <div>
                     <Button className="bg-transperent text-neutral-300 font-medium" onClick={()=> {}}>
                        Inscription
                     </Button>
                  </div>
                  <div>
                     <Button className="bg-white" onClick={()=> {}}>
                        Connexion
                     </Button>
                  </div>
               </>
            </div>
         </div>
         {children}
      </div>
   );
};
