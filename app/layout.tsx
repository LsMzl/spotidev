import type { Metadata } from "next";
// Font
import { Figtree } from "next/font/google";
// Styles
import "./globals.css";
import { SideBar } from "../components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Nextify",
   description: "L'application façon Spotify",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fr">
         <body className={font.className}>
            <ToasterProvider />
            <SupabaseProvider>
               <UserProvider>
                  <ModalProvider />
                  <SideBar>{children}</SideBar>
               </UserProvider>
            </SupabaseProvider>
         </body>
      </html>
   );
}
