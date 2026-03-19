import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import Link from "next/link"

export default function ClientOnboarding() {
  return (
    <div className="space-y-8 max-w-xl mx-auto py-12 px-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
          <span>Étape 1 sur 2</span>
          <span>Informations Société</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
           <div className="h-full bg-primary w-1/2"></div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Parlez-nous de votre <span className="text-primary italic">flotte</span>.</h1>
        <p className="text-muted-foreground text-pretty">Ces informations nous aident à personnaliser votre espace de gestion.</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Nom de l&apos;entreprise</label>
            <Input placeholder="Next2You Fleet" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Ville principale</label>
            <Input placeholder="Paris, Lyon..." required />
          </div>
        </div>
        
        <div className="space-y-4">
          <label className="text-sm font-semibold">Taille de la flotte</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
             {["1-5", "6-20", "21-50", "50+"].map((size) => (
               <div key={size} className="relative">
                 <input type="radio" name="fleet-size" value={size} id={`size-${size}`} className="peer sr-only" />
                 <label htmlFor={`size-${size}`} className="flex items-center justify-center p-3 text-sm font-medium border-2 rounded-2xl cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-muted/50 transition-all">
                   {size} véh.
                 </label>
               </div>
             ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold">Type de véhicules principaux</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             {["Citadines / Berlines", "Utilitaires", "Luxe / Premium", "Motos / Scooters"].map((type) => (
               <div key={type} className="flex items-center gap-3 p-4 border-2 rounded-2xl hover:bg-muted/50 cursor-pointer">
                 <input type="checkbox" className="w-5 h-5 accent-primary" />
                 <span className="text-sm font-medium">{type}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
           <Link href="/signup" className="text-sm font-medium text-muted-foreground hover:text-foreground">Retour</Link>
           <Button className="px-12" size="lg" asChild>
             <Link href="/client">Terminer l&apos;onboarding</Link>
           </Button>
        </div>
      </form>
    </div>
  )
}
