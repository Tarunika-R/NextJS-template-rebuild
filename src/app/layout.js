import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MainSection1 from "./components/MainSection1";
import ContactCardSection from "./components/ContactCardSection";
import OurStory from "./components/OurStory";
import FeatureSection from "./components/FeatureSection";
import AboutUs from "./components/AboutUs";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";
import {Sansita, Lato} from "next/font/google";
import { cn } from "@/lib/utils";

//import { lato, sansita } from "@/utils/fonts";

export const metadata = {
  title: "Zeal Taste",
  description: "Generated by create next app",
};

const sansita = Sansita({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-sansita",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400','700'],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
               "min-h-screen bg-background antialiased", lato.variable, sansita.variable
            )}>
          <Header/>
          <MainSection1/>
          <ContactCardSection/>
          <OurStory/>
          <FeatureSection/>
          <AboutUs/>
          <Features2/>
          <Footer/>
        {children}
      </body>
    </html>
  );
};
