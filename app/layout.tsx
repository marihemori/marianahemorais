import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Nav from "@/components/nav";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Progress from "@/components/progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mariana Morais",
  description: "Mariana is a developer focused on Front-End development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} text-zinc-800 relative px-[2rem] sm:px-[16rem] m-2`}
      >
        <Header />
        <ActiveSectionContextProvider>
          <Nav />
          {children}
        </ActiveSectionContextProvider>
        <Progress />
      </body>
    </html>
  );
}
