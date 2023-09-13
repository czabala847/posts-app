import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Header, LayoutBackground } from "./components";
import { COLORS, SIZES } from "./themes/vars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts App",
  description: "Aplicacion de post hecha en Next JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className="relative flex flex-col items-center min-h-screen"
          style={{ backgroundColor: COLORS.bgMain }}
        >
          <LayoutBackground />

          <Header />
          <div
            className="container px-4 md:px-0 z-10 relative"
            style={{ color: COLORS.textColor, marginTop: SIZES.headerHeight }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
