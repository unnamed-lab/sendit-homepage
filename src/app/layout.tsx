import type { Metadata } from "next";
import "@fontsource-variable/teachers";
import { Teachers } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { CartSidebar } from "@/components/cart-sidebar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const teachers = Teachers({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyper Market - Sell Everything, Buy Everything",
  description:
    "Hyper Market, best platform that lets you purchase any digital asset on unbelievable discounts. buy or sell anything with crypto!",
  openGraph: {
    title: "Hyper Market - Sell Everything, Buy Everything",
    description:
      "Hyper Market, best platform that lets you purchase any digital asset on unbelievable discounts. buy or sell anything with crypto!",
    url: "https://sendit-homepage.onrender.com/",
    siteName: "Hyper Market",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyper Market - Sell Everything, Buy Everything",
    description:
      "Hyper Market, best platform that lets you purchase any digital asset on unbelievable discounts. buy or sell anything with crypto!",
    creator: "@SenditMarkets",
    site: "@SenditMarkets",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teachers.variable} antialiased`}>
        <ScrollProgress className="top-0 h-1" />
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
