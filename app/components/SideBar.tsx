"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

// Icons
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Box } from "./Box";
import { SidebarItem } from "./SidebarItem";
import { Library } from "./Library";

interface SidebarProps {
   children: React.ReactNode;
}

export const SideBar: React.FC<SidebarProps> = ({ children }) => {
   const pathname = usePathname();

   //! A commenter
   const routes = useMemo(
      () => [
         {
            label: "Accueil",
            active: pathname !== "/search",
            href: "/",
            icon: HiHome,
         },
         {
            label: "Rechercher",
            active: pathname !== "/",
            href: "/search",
            icon: BiSearch,
         },
      ],
      [pathname]
   );

   return (
      <div className="flex h-full">
         <div className="hidden md:flex flex-col gap-y-2 bg-black p-2 w-[300px]">
            <Box>
               <div className="flex flex-col gap-y-4 px-5 py-4">
                  {routes.map((item) => (
                     <SidebarItem key={item.label} {...item} />
                  ))}
               </div>
            </Box>
            <Box className="overflow-y-auto h-full">
               <Library />
            </Box>
         </div>
         <main className="h-full flex-1 overflow-y-auto py-2 max-md:mx-1">{children}</main>
      </div>
   );
};
