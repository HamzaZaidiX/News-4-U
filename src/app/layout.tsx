import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import RandomNews from "@/components/RandomNews";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News 4 U",
  description: "News 4 U is the Fastest News Platform which gives to News when you want!",
  icons:{
    icon: { url: '/news_logo.png' },
  },
  openGraph: {
    title: 'News 4 U',
    description: 'News 4 U is the Fastest News Platform which gives to News when you want!',
    type: 'article',
    authors: 'Hamza Zaidi',
  },
  keywords:['news4u','news','news about everything']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={trispace.className}>
      
      <main className='px-2 md:px-20'>
        <Header />
        <Navbar />
        <section className="flex justify-between">
          {children}
          <RandomNews />
        </section>
      </main>


      </body>
    </html>
  );
}
