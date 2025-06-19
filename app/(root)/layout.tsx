import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "@/components/ui/sonner";

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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="w-full h-full flex flex-col overflow-x-hidden"
      >
        <NextTopLoader />
        <Header />
        <main>
          {children}

        </main>
          <Toaster />
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
