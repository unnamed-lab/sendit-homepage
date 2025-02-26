import Image from "next/image"
import { Loader2 } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-grey-50 flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="/logo.svg"
          alt="Sendit Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-4 text-lg text-primary">Loading amazing content...</p>
    </div>
  )
}

