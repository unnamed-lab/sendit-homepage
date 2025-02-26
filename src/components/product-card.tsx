"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, TrendingUp, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
  sales: number;
  author: string;
  authorAvatar: string;
  trending?: boolean;
  featured?: boolean;
  url?: string;
}

export function ProductCard({
  title,
  image,
  price,
  rating,
  sales,
  author,
  authorAvatar,
  trending,
  featured,
  url = "#",
}: ProductCardProps) {
  return (
    <Link href={url}>
      <Card className="group flex flex-col overflow-hidden from-grey-800 to-gray-900 bg-gradient-to-br border-grey-300 transition-all hover:border-[#223D40]">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/logo.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {trending && (
            <Badge className="absolute top-2 left-2 bg-primary">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
          {featured && (
            <Badge className="absolute top-2 left-2 bg-primary">
              <Award className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          <div className="absolute w-full bottom-0 left-0 h-20 bg-gradient-to-t from-grey-800" />
        </div>
        <div className="px-3 py-1 pt-3 mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-5 w-5">
              <AvatarImage
                src={authorAvatar || "/placeholder.svg"}
                alt={author}
                width={18}
                height={18}
                className="object-cover transition-transform group-hover:scale-105"
              />
              <AvatarFallback className="text-xs">{title[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs sm:text-sm text-gray-400">{author}</span>
          </div>
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-xs text-gray-400">
                  {rating.toFixed(1)}
                </span>
              </div>
              <span className="text-xs text-gray-400">
                ({sales.toLocaleString()} sales)
              </span>
            </div>
            <span className="text-base font-bold text-white">{price} SOL</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
