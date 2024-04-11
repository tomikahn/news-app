import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const plex_sans = IBM_Plex_Sans_Arabic({weight:["100", "200", "300", "400", "500", "600"], subsets:["latin"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plex_sans.className}>
        <main>
          <Header/>
          <section className="page-container">
            {children}
          </section>  
          <Footer/>
        </main>
      </body>
    </html>
  );
}
