import {
  
    Sansita as FontSansita,
 } from "next/font/google";
 
 
 const fontSansita = FontSansita({
    subsets: ["latin"],
    variable: "--font-sansita",
    weight: ["400", "700", "800", "900"],
 });
 
 export const sansita = fontSansita.variable;