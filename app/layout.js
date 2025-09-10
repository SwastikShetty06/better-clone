// Swastik Shetty
// This is the root layout for the entire application.
// It includes the header, footer, and the main content area.
// I've also imported the 'Inter' font for a cleaner look.

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Setting up the Inter font with the Latin subset.
const inter = Inter({ subsets: ["latin"] });

// Metadata for the site, good for SEO.
export const metadata = {
  title: "Better.com Clone by Swastik",
  description: "A clone of the Better.com website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* The main content of our pages will be rendered here. */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

