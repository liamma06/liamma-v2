import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";


const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liam Ma",
  description: "Hi, I'm Liam — an engineering student building projects and exploring new technologies.",
  metadataBase: new URL("https://liamma.com"),
  openGraph: {
    title: "Liam Ma",
    description: "Hi, I'm Liam — an engineering student building projects and exploring new technologies.",
    url: "https://liamma.com",
    siteName: "Liam Ma",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "Liam Ma Portfolio Screenshot",
      },
    ],
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex justify-center min-h-screen w-full bg-grid">
            <div className="flex flex-col gap-4 w-full md:max-w-[670px] m-6 md:m-6 relative z-10 pt-2">              
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
