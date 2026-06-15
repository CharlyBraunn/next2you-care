'use client'

import { useState, useEffect } from 'react'

export function RealtimeMissionCounter() {
  const [count, setCount] = useState(12458) // Initial high number

  useEffect(() => {
    // Simulate real-time increments
    const interval = setInterval(() => {
      // Randomly increment by 0 or 1 to simulate organic growth
      if (Math.random() > 0.6) {
        setCount(prev => prev + 1)
      }
    }, 4500)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 text-center shadow-2xl backdrop-blur-sm">
      <div className="text-5xl font-black text-[#26D885] tracking-tight tabular-nums">
        {count.toLocaleString('fr-FR')}
      </div>
      <div className="text-sm font-bold text-white/70 mt-3 uppercase tracking-widest">
        Missions effectuées cette année
      </div>
    </div>
  )
}
