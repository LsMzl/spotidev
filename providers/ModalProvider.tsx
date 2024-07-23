"use client";
// React
import { useEffect, useState } from "react";

// Components
import { AuthModal } from "@/components/AuthModal";

/**
 * N'affiche son contenu que lorsque le composant est monté/rendu.
 * @returns
 */
const ModalProvider = () => {
   const [isMounted, setIsMounted] = useState<boolean>(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   return (
      <AuthModal/>
   );
};

export default ModalProvider;
