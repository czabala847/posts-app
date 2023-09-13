import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Header } from "./components";
import { GradientBlurPoint } from "./components/GradientBlurPoint";

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
          <div className="fixed w-full top-0 left-0 right-0">
            <GradientBlurPoint
              background={COLORS.lightBlue}
              size={200}
              left={-100}
              top={60}
              blur={80}
            />
          </div>

          <Header />
          <div
            className="container px-4 md:px-0 z-10 relative"
            style={{ color: COLORS.textColor, marginTop: SIZES.headerHeight }}
          >
            {children}
          </div>

          <div className="fixed w-full top-2/4 left-0 right-0">
            <GradientBlurPoint
              background={COLORS.lightYellow}
              size={400}
              right={-150}
              top={0}
              blur={120}
            />
          </div>
        </main>
      </body>
    </html>
  );
}
