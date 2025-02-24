import Image from "next/image"
import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src=""
          alt="Sendit Logo"
          fill
          className="object-contain"
        />
      </div>
      <Loader2 className="h-8 w-8 animate-spin text-[#223D40]" />
      <p className="mt-4 text-lg text-white">Loading amazing content...</p>
    </div>
  )
}

