import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Marquee } from "./magicui/marquee";

interface Product {
  id: number;
  title: string;
  image: string;
  price?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "New Discord Product",
    image: "",
    price: "99 USDC",
  },
  {
    id: 2,
    title: "New Trading Product",
    image: "",
    price: "99 USDC",
  },
  {
    id: 3,
    title: "Product Testing",
    image: "",
  },
  {
    id: 4,
    title: "Meme Coins vs. Util",
    image: "",
  },
  {
    id: 5,
    title: "Investment Tracker",
    image: "",
  },
  {
    id: 6,
    title: "Figma Design themes",
    image: "",
  },
  {
    id: 7,
    title: "New website testing",
    image: "",
  },
  {
    id: 8,
    title: "Random product",
    image: "",
  },
  {
    id: 9,
    title: "New Telegram Product",
    image: "",
  },
  {
    id: 10,
    title: "Risk Management 101",
    image: "",
  },
];

export function DealCard() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-1 items-center justify-center gap-2">
          <span className="inline-block w-5 h-5 bg-gray-800 rounded-full" />
          <h2 className="text-sm font-semibold text-gray-800">
            LISTED PRODUCTS
          </h2>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">GRAB BEST DEALS</h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-3">
        <Marquee pauseOnHover className="[--duration:40s]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900 border-gray-800 hover:border-[#223D40] transition-all duration-200"
            >
              <Link href="#" className="block p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={product.image || "/logo.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white truncate">
                      {product.title}
                    </h3>
                    {product.price && (
                      <p className="text-sm text-green-100">{product.price}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Buy</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
            </Card>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900 border-gray-800 hover:border-[#223D40] transition-all duration-200"
            >
              <Link href="#" className="block p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={product.image || "/logo.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white truncate">
                      {product.title}
                    </h3>
                    {product.price && (
                      <p className="text-sm text-green-100">{product.price}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Buy</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
            </Card>
          ))}
        </Marquee>

        <Marquee pauseOnHover className="[--duration:40s]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900 border-gray-800 hover:border-[#223D40] transition-all duration-200"
            >
              <Link href="#" className="block p-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={product.image || "/logo.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white truncate">
                      {product.title}
                    </h3>
                    {product.price && (
                      <p className="text-sm text-green-100">{product.price}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Buy</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
            </Card>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
