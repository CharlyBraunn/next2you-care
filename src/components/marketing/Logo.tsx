import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string;
  variant?: "green" | "white";
}

export const Logo = ({ className, variant = "green" }: LogoProps) => {
  const imgSrc = variant === "white" ? "/logo-white.png" : "/logo-green.png";
  
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src={imgSrc} 
        alt="NEXT2YOU Care" 
        width={60} 
        height={60} 
        className="object-contain"
        priority
      />
    </div>
  )
}
