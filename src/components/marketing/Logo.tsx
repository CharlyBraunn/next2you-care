import Image from "next/image"
import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-[#26D885] p-2 rounded-xl shadow-sm">
        <Image 
          src="/logo.png" 
          alt="NEXT2YOU Care" 
          width={32} 
          height={32} 
          className="object-contain"
        />
      </div>
      <span className="text-xl font-black tracking-tighter">
        NEXT2YOU <span className="text-[#14C774]">CARE</span>
      </span>
    </div>
  )
}
