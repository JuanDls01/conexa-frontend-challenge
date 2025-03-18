import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { CharacterSelectionProvider } from "@/hooks/useCharacterSelection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conexa Frontend Challenge",
  description:
    "This page is the result of a challenge for the position of Sr. Frontend Developer at Conexa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CharacterSelectionProvider>{children}</CharacterSelectionProvider>
        <footer className="flex justify-center">
          <div>
            Created with ❤️ by
            <Button variant={"link"} className="px-2">
              <Link href={"https://juanidls.dev"} target="_blank">
                JuaniDls
              </Link>
            </Button>
          </div>
        </footer>
      </body>
    </html>
  );
}
