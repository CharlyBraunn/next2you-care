"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Logo } from "./Logo"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isTop, setIsTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Top/Scrolled logic
      if (currentScrollY > 50) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-6 pt-4",
        "translate-y-0"
      )}
    >
      <div className={cn(
        "flex h-20 items-center justify-between px-8 rounded-full transition-all duration-300 border relative z-50 backdrop-blur-xl",
        isTop && !isMobileMenuOpen ? "bg-white/30 border-transparent shadow-sm" : "bg-white/40 border-gray-200/10 shadow-lg"
      )}>
        <Link href="/">
          <Logo variant="green" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/owners" className="text-gray-600 hover:text-primary transition-colors">Je suis loueur</Link>
          <Link href="/providers" className="text-gray-600 hover:text-primary transition-colors">Je suis prestataire</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-700 hover:text-primary transition-colors">
            Connexion
          </Link>
          <Button className="hidden md:inline-flex rounded-full px-6 font-medium transition-colors" asChild>
            <Link href="/signup">Démarrer</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-b-3xl pt-28 pb-8 px-6 md:hidden animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-6 text-lg font-medium text-center">
            <Link href="/owners" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-primary transition-colors">Je suis loueur</Link>
            <Link href="/providers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-primary transition-colors">Je suis prestataire</Link>
            <div className="w-full h-px bg-border my-2"></div>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-primary transition-colors">Connexion</Link>
            <Button className="rounded-full w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/signup">Démarrer</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
