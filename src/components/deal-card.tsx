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
          <span className="flex w-6 h-6 items-center justify-center border border-green-900 rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2066_13331)">
                <g clip-path="url(#clip1_2066_13331)">
                  <path
                    d="M5.33399 5.33398H5.34065M1.33398 3.46732L1.33398 6.45033C1.33398 6.77645 1.33398 6.93951 1.37082 7.09296C1.40349 7.22901 1.45736 7.35907 1.53046 7.47836C1.61292 7.61292 1.72822 7.72822 1.95882 7.95882L7.07124 13.0712C7.86328 13.8633 8.25929 14.2593 8.71595 14.4077C9.11764 14.5382 9.55033 14.5382 9.95202 14.4077C10.4087 14.2593 10.8047 13.8633 11.5967 13.0712L13.0712 11.5967C13.8633 10.8047 14.2593 10.4087 14.4077 9.95202C14.5382 9.55033 14.5382 9.11764 14.4077 8.71595C14.2593 8.25929 13.8633 7.86328 13.0712 7.07124L7.95882 1.95882C7.72822 1.72822 7.61292 1.61292 7.47836 1.53046C7.35907 1.45736 7.22901 1.40349 7.09296 1.37082C6.93951 1.33398 6.77645 1.33398 6.45033 1.33398L3.46732 1.33398C2.72058 1.33398 2.34721 1.33398 2.062 1.47931C1.81111 1.60714 1.60714 1.81111 1.47931 2.062C1.33398 2.34721 1.33398 2.72058 1.33398 3.46732ZM5.66732 5.33398C5.66732 5.51808 5.51808 5.66732 5.33399 5.66732C5.14989 5.66732 5.00065 5.51808 5.00065 5.33398C5.00065 5.14989 5.14989 5.00065 5.33399 5.00065C5.51808 5.00065 5.66732 5.14989 5.66732 5.33398Z"
                    stroke="#050505"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2066_13331">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
                <clipPath id="clip1_2066_13331">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
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
