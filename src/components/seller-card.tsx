import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface SellerCardProps {
  name: string
  avatar: string
  rating: number
  sales: number
  category: string
}

export function SellerCard({ name, avatar, rating, sales, category }: SellerCardProps) {
  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <Badge variant="secondary" className="bg-[#223D40]">
              Top Seller
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              {rating.toFixed(1)}
            </div>
            <div>{sales.toLocaleString()} sales</div>
            <div>{category}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

