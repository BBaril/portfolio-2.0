// Bethany Baril  04/30/25

// app/layout.jsx
import '@/styles/globals.css';
import Providers from "@/shared/Providers";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // adjust as needed
  variable: '--font-merriweather',
});


export const metadata = {
  title: "Portfolio | Bethany Baril",
  description: "UI/UX Developer with full-stack experience and a background in psychology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${merriweather.variable} scroll-smooth`}>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen px-4 md:px-8 max-w-7xl mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
