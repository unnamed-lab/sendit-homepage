import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface DealCardProps {
  title: string
  image: string
  href: string
}

export function DealCard({ title, image, href }: DealCardProps) {
  return (
    <Card className="w-[160px] sm:w-[200px] flex-shrink-0 bg-gray-900 border-gray-800">
      <div className="p-2 sm:p-3">
        <div className="aspect-square relative mb-2 rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <h3 className="text-xs sm:text-sm text-white font-medium mb-2 line-clamp-2">{title}</h3>
        <Link href={href}>
          <Button variant="secondary" size="sm" className="w-full text-xs sm:text-sm">
            Buy
          </Button>
        </Link>
      </div>
    </Card>
  )
}

