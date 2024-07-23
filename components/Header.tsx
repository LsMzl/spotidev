"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

// Icons
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface HeaderProps {
   children: React.ReactNode;
   className?: string;
}
export const Header: React.FC<HeaderProps> = ({ className, children }) => {
   const router = useRouter();
   const authModal = useAuthModal();

   const supabaseClient = useSupabaseClient();
   const { user } = useUser();

   const handleLogout = async () => {
      const { error } = await supabaseClient.auth.signOut();
      router.refresh();

      if (error) {
         toast.error(error.message);
      } else {
         toast.success("Vous êtes maintenant déconnecté");
      }
   };

   return (
      <div
         className={twMerge(
            `h-fit p-6 bg-gradient-to-b from-emerald-700`,
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
               {user ? (
                  <div className="flex gap-x-4 items-center">
                     <Button
                        onClick={handleLogout}
                        className="bg-white px-6 py-2"
                     >
                        Déconnexion
                     </Button>
                     <Button
                        onClick={() => router.push("/account")}
                        className="bg-white p-3"
                     >
                        <FaUserAlt />
                     </Button>
                  </div>
               ) : (
                  <>
                     <div>
                        <Button
                           className="bg-transparent text-neutral-300 font-medium"
                           onClick={authModal.onOpen}
                        >
                           Inscription
                        </Button>
                     </div>
                     <div>
                        <Button className="bg-white" onClick={authModal.onOpen}>
                           Connexion
                        </Button>
                     </div>
                  </>
               )}
            </div>
         </div>
         {children}
      </div>
   );
};
