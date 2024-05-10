import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Dias",
  description: "Como desenvolvedor web, meu objetivo é criar sites de alta qualidade, com ótimo desempenho e facilidade de uso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={robotoMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
