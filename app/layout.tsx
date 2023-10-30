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
        className={`${inter.className} text-white relative flex flex-col  mx-auto max-w-[360px] md:max-w-lg lg:max-w-[1250px] my-10 lg:flex`}
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
