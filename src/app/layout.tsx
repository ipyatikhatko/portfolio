import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react"

const inter = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Portfolio | Elijah Pyatikhatko",
  description: "Elijah Pyatikhatko portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}
