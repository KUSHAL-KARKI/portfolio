import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kushal Karki",
  description:
    "Computer Engineering student passionate about building scalable web applications .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
        <Navbar />
        <Sidebar />
        <div className="w-full md:pl-20">{children}</div>
      </body>
    </html>
  );
}