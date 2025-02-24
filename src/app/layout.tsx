import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teachers.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
