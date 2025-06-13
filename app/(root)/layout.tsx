import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: "batanga analytics",
  description: "Analytics & Cybersecurity Solutions",
  generator: "emino.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col">
      <NextTopLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
