"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

export function PlatformStats() {
  const platformData = {
    labels: ["Web3 Wallets", "Credit Card", "Crypto", "Other"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ["#223D40", "#2A4B4E", "#325A5D", "#3A686B"],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#9CA3AF",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-4 sm:p-6 bg-gray-900 border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
        <div className="h-[300px] sm:h-[400px]">
          <Doughnut data={platformData} options={options} />
        </div>
      </Card>
      <Card className="p-4 sm:p-6 bg-gray-900 border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Platform Growth</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Active Users</span>
              <span className="text-sm text-white">2,324</span>
            </div>
            <Progress
              value={78}
              className="bg-gray-800 h-2"
              style={{ "--progress-background": "#223D40" } as React.CSSProperties}
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Products Listed</span>
              <span className="text-sm text-white">1,809</span>
            </div>
            <Progress
              value={65}
              className="bg-gray-800 h-2"
              style={{ "--progress-background": "#223D40" } as React.CSSProperties}
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Premium Users</span>
              <span className="text-sm text-white">515</span>
            </div>
            <Progress
              value={35}
              className="bg-gray-800 h-2"
              style={{ "--progress-background": "#223D40" } as React.CSSProperties}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

