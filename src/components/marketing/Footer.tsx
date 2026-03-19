import Link from "next/link"
import { Logo } from "./Logo"

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo className="invert brightness-0" />
            <p className="text-muted-foreground max-w-xs">
              La plateforme premium de préparation et nettoyage automobile pour les professionnels de la mobilité.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/owners" className="hover:text-white transition-colors">Pour les loueurs</Link></li>
              <li><Link href="/providers" className="hover:text-white transition-colors">Pour les prestataires</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Tarifs</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Société</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 NEXT2YOU Care. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">CGU</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
