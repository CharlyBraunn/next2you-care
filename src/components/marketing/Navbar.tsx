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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-7xl px-6 pt-4 pointer-events-auto">
        <div className={cn(
          "flex h-20 items-center justify-between px-8 rounded-full transition-all duration-300 border relative z-50 backdrop-blur-2xl",
          isTop && !isMobileMenuOpen
            ? "bg-white/10 border-white/10 shadow-none text-white"
            : "bg-white/60 border-gray-200/20 shadow-lg text-gray-900"
        )}>
          <Link href="/" className="transition-transform hover:scale-105">
            <Logo variant={isTop && !isMobileMenuOpen ? "white" : "green"} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/owners" className={cn(
              "transition-colors",
              isTop && !isMobileMenuOpen ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-primary"
            )}>Je suis loueur</Link>
            <Link href="/providers" className={cn(
              "transition-colors",
              isTop && !isMobileMenuOpen ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-primary"
            )}>Je suis prestataire</Link>
          </nav>
          
          <div className="flex items-center gap-6">
            <Link href="/login" className={cn(
              "hidden sm:block text-sm font-semibold transition-colors",
              isTop && !isMobileMenuOpen ? "text-white/90 hover:text-white" : "text-gray-700 hover:text-primary"
            )}>
              Connexion
            </Link>
            <Button className={cn(
              "hidden md:inline-flex rounded-full px-6 font-bold transition-all hover:scale-105 active:scale-95",
              isTop && !isMobileMenuOpen ? "bg-white text-primary hover:bg-white/90" : ""
            )} asChild>
              <Link href="/signup">Démarrer</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isTop && !isMobileMenuOpen ? "text-white" : "text-gray-800"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
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
