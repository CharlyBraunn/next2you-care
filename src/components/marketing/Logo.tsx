import Image from "next/image"
import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="/logo.png" 
        alt="NEXT2YOU Care" 
        width={110} 
        height={32} 
        className="object-contain"
        priority
      />
    </div>
  )
}
