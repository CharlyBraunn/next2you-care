import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
  variant?: "green" | "white";
}

export const Logo = ({ className, variant = "green" }: LogoProps) => {
  const imgSrc = variant === "white" ? "/logo-white.png" : "/logo-green.png";
  
  return (
    <div className={cn("relative flex items-center h-12 w-48", className)}>
      <Image 
        src={imgSrc} 
        alt="NEXT2YOU Care" 
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  )
}
