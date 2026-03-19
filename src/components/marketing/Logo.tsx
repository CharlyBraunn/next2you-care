import React from 'react'
import { Leaf } from 'lucide-react'

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-xl tracking-tight ${className}`}>
      <div className="bg-primary p-1.5 rounded-xl">
        <Leaf className="w-5 h-5 text-white" />
      </div>
      <span className="text-foreground">
        NEXT2YOU <span className="text-primary">Care</span>
      </span>
    </div>
  )
}
