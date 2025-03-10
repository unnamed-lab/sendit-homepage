import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

interface SellerCardProps {
  name: string;
  avatar: string;
  rating: number;
  sales: number;
  category: string;
  url: string
}

export function SellerCard({
  name,
  avatar,
  rating,
  sales,
  category,
  url
}: SellerCardProps) {
  return (
    <Link href={url}>
    <Card className="p-6 bg-gray-900 border-gray-800">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            {sales > 500 && rating > 4 && (
              <Badge
                variant="secondary"
                className="bg-green-600 text-white pointer-events-none"
              >
                Top Seller
              </Badge>
            )}
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
    </Link>
  );
}
