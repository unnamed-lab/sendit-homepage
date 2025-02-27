import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  href: string;
}

export function FeaturedCard({
  title,
  image,
  price,
  rating,
  reviews,
  href,
}: FeaturedCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative sm:max-md:aspect-[4/3] lg:h-full overflow-hidden from-grey-800 to-gray-900 bg-gradient-to-br border-gray-800">
        <Image
          src={image || "./logo.svg"}
          alt={title}
          fill
          priority
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6 flex flex-col justify-end">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
              <span className="ml-2 text-xs sm:text-sm text-gray-400">
                {reviews} reviews
              </span>
            </div>
            <span className="text-base sm:text-lg font-bold text-white">
              {price} USDC
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
