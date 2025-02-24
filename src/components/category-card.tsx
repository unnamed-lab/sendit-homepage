import type React from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  backgroundImage: string
}

export function CategoryCard({ title, description, icon, href, backgroundImage }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="relative h-[180px] sm:h-[200px] overflow-hidden group transition-all hover:border-[#223D40]">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative h-full p-4 sm:p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>
          <div className="mt-auto flex items-center text-[#223D40] font-medium group-hover:text-white transition-colors">
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  )
}

