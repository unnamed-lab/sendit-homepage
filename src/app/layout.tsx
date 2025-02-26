import type { Metadata } from "next";
import "@fontsource-variable/teachers";
import { Teachers } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { CartSidebar } from "@/components/cart-sidebar";

const teachers = Teachers({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyper Market - Sell Everything, Buy Everything",
  description:
    "Hyper Market, best platform that lets you purchase any digital asset on unbelievable discounts. buy or sell anything with crypto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teachers.variable} antialiased`}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
