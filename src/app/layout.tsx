import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
        <NavigationBar />
        <main className={inter.className}>{children}</main>
        <Footer /> 
    </>
  )
}


export default RootLayout;


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Layout UI */}
//         <NavigationBar />
//         <main>{children}</main>
//         <Footer /> 

//       </body>
//     </html>
//   )
// }