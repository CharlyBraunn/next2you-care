import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Logo } from "./Logo"

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/owners" className="hover:text-primary transition-colors">Pour les loueurs</Link>
          <Link href="/providers" className="hover:text-primary transition-colors">Pour les prestataires</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Tarifs</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Connexion
          </Link>
          <Button asChild>
            <Link href="/signup">Démarrer</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
