"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

interface AnalyticsCardProps {
  title: string
  value: string
  change: number
  data: Array<{ date: string; value: number }>
  prefix?: string
  suffix?: string
}

export function AnalyticsCard({ title, value, change, data, prefix = "", suffix = "" }: AnalyticsCardProps) {
  const isPositive = change > 0

  return (
    <Card className="p-4 sm:p-6 bg-gray-900 border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-400">{title}</h3>
          <div className="flex flex-wrap items-baseline gap-2 mt-2">
            <span className="text-xl sm:text-2xl font-bold text-white">
              {prefix}
              {value}
              {suffix}
            </span>
            <span className={`text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
      </div>
      <div className="h-[60px] sm:h-[80px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" hide />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-gray-800 border border-gray-700 p-2 rounded-lg">
                      <p className="text-sm text-white">
                        {prefix}
                        {payload[0].value}
                        {suffix}
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? "#22c55e" : "#ef4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

