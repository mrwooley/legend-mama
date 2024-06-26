import Navbar from "@/components/Navbar";
import { Box, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { type ReactNode } from "react";
import "./globals.css"; // TODO: Remove if we don't end up using a global CSS file
import { Providers } from "./providers";

const jacquard24 = localFont({
  src: "../public/font/Jacquard24-Regular.ttf",
  display: "swap",
  variable: "--font-jacquard",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Legend Mama",
  description: "Generated by create next app", // TODO: CHANGE THIS!
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactNode {
  return (
    <html
      lang="en"
      className={`${jacquard24.variable} ${sourceSerif.variable} ${sourceSans.variable}`}
    >
      <body>
        <Providers>
          <Flex h="100vh" w="100vw">
            <Navbar />
            <Box h="100%" w="100%" overflowY="auto" overflowX="hidden">
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
