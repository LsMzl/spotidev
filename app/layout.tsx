import type { Metadata } from "next";
// Font
import { Figtree } from "next/font/google";
// Styles
import "./globals.css";
import { SideBar } from "./components/SideBar";


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
            <SideBar>{children}</SideBar>
         </body>
      </html>
   );
}
