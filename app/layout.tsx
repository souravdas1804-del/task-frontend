import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sourav Das | Senior Salesforce Consultant & Developer",
  description:
    "Portfolio of Sourav Das - Senior Salesforce Consultant, Developer, and Administrator with 7 years of software engineering experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}