import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AbsoluteLinks from "./components/AbsoluteLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const inter = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Portfolio - Simon Bengtsson - Fullstack Developer - Gothenburg",
  description: "Simon Bengtsson portfolio and CV page built with Next.js to showcase my work and skills as a fullstack developer.",
  creator: "Simon Bengtsson",
  applicationName: "Portfolio",
  keywords: "portfolio, cv, fullstack, developer, gothenburg, simon bengtsson",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://simonbengtsson.com", // Fix URL
    siteName: "Portfolio",
    title: "Portfolio - Simon Bengtsson - Fullstack Developer - Gothenburg",
    description: "Simon Bengtsson portfolio and CV page built with Next.js to showcase my work and skills as a fullstack developer.",
    // images: [
    //   {
    //     url: "./Simon-MC.jpg", // Fix OpenGraph image
    //     alt: "Simon Bengtsson",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <AbsoluteLinks />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
