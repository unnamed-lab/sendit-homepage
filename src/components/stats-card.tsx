"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import CountUp from "react-countup"

interface StatsCardProps {
  title: string
  value: number
  change: number
  prefix?: string
  suffix?: string
}

export function StatsCard({ title, value, change, prefix = "", suffix = "" }: StatsCardProps) {
  const isPositive = change > 0

  return (
    <Card className="p-6 bg-gray-900 border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <span className={`flex items-center text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {Math.abs(change)}%
        </span>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-white">
          {prefix}
          <CountUp end={value} separator="," />
          {suffix}
        </span>
      </div>
    </Card>
  )
}

