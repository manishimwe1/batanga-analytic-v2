import type { Metadata } from "next";
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";

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
      <body className="w-full h-full flex flex-col" suppressHydrationWarning>
        <main>{children}</main>
      {/* <SanityLive/> */}
      </body>

    </html>
  );
}
