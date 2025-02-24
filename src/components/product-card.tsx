import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  title: string
  image: string
  price: number
  rating: number
  sales: number
  author: string
  authorAvatar: string
  trending?: boolean
  featured?: boolean
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
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden bg-gray-900 border-gray-800 transition-all hover:border-[#223D40]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {trending && (
          <Badge className="absolute top-2 left-2 bg-[#223D40]">
            <TrendingUp className="h-3 w-3 mr-1" />
            Trending
          </Badge>
        )}
        {featured && (
          <Badge className="absolute top-2 left-2 bg-[#223D40]">
            <Award className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={authorAvatar || "/placeholder.svg"}
            alt={author}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs sm:text-sm text-gray-400">{author}</span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-xs sm:text-sm text-gray-400">{rating.toFixed(1)}</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400">({sales.toLocaleString()} sales)</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-[#223D40]">{price} SOL</span>
        </div>
        <Button className="w-full bg-[#223D40] hover:bg-[#3b4f50]">View Details</Button>
      </div>
    </Card>
  )
}

