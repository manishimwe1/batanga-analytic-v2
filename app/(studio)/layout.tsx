import type { Metadata } from "next";
import "../globals.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
